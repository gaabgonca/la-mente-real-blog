import { FormEvent, useContext, useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Router from 'next/router';
import { OpenFormContext } from "../contexts/contact-form-context";
import cn from "classnames";

interface FormState {
  name?: FormField;
  email?: FormField;
  message?: FormField;
  submissionError: boolean
}

interface FormField {
  value?: string;
  error?: string;
}

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type FormInputEvent = FormEvent<InputElement> & { target: InputElement };

const invalidOrMissingEmail : string = "Por favor, ingresa un email válido."
const formServiceEndpoint : string = "https://www.formbackend.com/f/cca2307ed348c42a"

const emptyForm: FormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
  submissionError: false
};

const defaultInputStyle =
  "border border-solid border-2 rounded focus:rounded p-2 w-full text-xl";

export default function ContactForm() {
  let { open, setOpen } = useContext(OpenFormContext);
  let [formState, setFormState] = useState<FormState>(emptyForm);
  const inputRef = useRef()

  const handleChange = (e: FormInputEvent) => {
    e.preventDefault();
    const field = e.target.name;
    const newValue = e.target.value;
    setFormState({
      ...formState,
      [field]: {
        ///This is done since destructuring operator [...] is shallow, it only gets to the first layer of objects
        error: "", ///Clear error on value update
        value: newValue,
      },
      submissionError: false
    });
  };

  useEffect(()=> {
    if( !open && formState !== emptyForm) {
      setFormState(emptyForm)
    }
  } , [open])

  const { name, email, message, submissionError } = formState;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
      let nameError =  name.error
      let emailError = email.error
      let messageError = message.error
    
    if (!name.value) {
      nameError = "Recuerda dejar tu nombre o un apodo."
    }
    if (!email.value) {
      emailError =  invalidOrMissingEmail
    }
    if (!message.value) {
      messageError = "Recuerda dejar una consulta o un mensaje."
    }
    if (nameError || emailError || messageError) {
      setFormState({
        ...formState,
        name: {...name, error: nameError},
        email: {...email, error: emailError},
        message: {...message, error: messageError}
      })
      return
    } else {
      const valuesObject = {
        name: name.value,
        email: email.value,
        message: message.value
      }
      fetch(formServiceEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(valuesObject),
      }).then(
        (response) => {
          if (response.status === 200) {
            setOpen(false)
            Router.push('/thankyou')
          } else {
            setFormState({
              name: name,
              email: email,
              message: message,
              submissionError: true
            })
          }
        }, 
        (failure)=> {
          setFormState({
            name: name,
            email: email,
            message: message,
            submissionError: true
          })
      })
    }

  };

  const handleEmailBlur = (e: FormInputEvent) => {
      if (e.target.validity.patternMismatch && !formState.email.error) {
        const {email, ...rest} = formState
        inputRef && inputRef.current && 
        setFormState({
          ...rest,
          email : {
            ...email,
            error: invalidOrMissingEmail
          }
        })
      }
  }

  

  const inputStyle = (field: FormField) =>
    cn(defaultInputStyle, {
      "border-red-400 focus:border-red-400 mb-1": field.error,
      "mb-4": !field.error,
    }); //TODO use this function and add validation on submit, then make POST request 

  ///Generate input field style based on wether it has error or not
  const inputStyles : string[] = [name,email,message].map((formField) => inputStyle(formField))
  const [nameStyle, emailStyle, messageStyle] = inputStyles

  ///Generate conditional error elements
  const [nameError, emailError, messageError] = [name,email,message].map((field) => FormError(field))

  return (
    <Dialog
      className={
        "flex fixed top-0 left-0 z-10 w-full h-full items-center justify-center content-center"
      }
      open={open}
      onClose={() => {
        setOpen(false);
        setFormState(emptyForm);
      }}
    >
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-black/50 "></div>
      <div className="w-full h-full fixed top-0 left-0 z-10 flex items-center justify-center content-center">
        <Dialog.Panel className="bg-white w-5/6 h-auto md:w-2/6  p-6 md:px-8 md:py-12 shadow-xl">
          <Dialog.Title className="text-2xl font-bold mb-8">
            Deja aquí tu consulta
          </Dialog.Title>
          <Dialog.Description className="text-xl font-medium">
            Da el primer paso hacia una mejor salud mental. Si tienes alguna
            inquietud o necesitas ayuda, no dudes en dejar un mensaje. Recuerda
            que tu privacidad y confidencialidad están garantizadas.
          </Dialog.Description>

          <form
            className="w-full h-auto flex flex-col items-start justify-center pt-4"
            accept-charset="UTF-8"
            onSubmit={handleSubmit}
          >
            <label className="font-bold text-xl" htmlFor="name">
              Nombre
            </label>
            <input
              className={nameStyle}
              type="text"
              id="name"
              name="name"
              value={name.value}
              onChange={handleChange}
            />
            {nameError}

            <label className="font-bold text-xl" htmlFor="email">
              Email
            </label>
            <input
              className={emailStyle}
              type="text"
              inputMode="email"
              id="email"
              name="email"
              onBlur={handleEmailBlur}
              ref={inputRef}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={email.value}
              onChange={handleChange}
            />
            {emailError}

            <label className="font-bold text-xl" htmlFor="message">
              Consulta
            </label>
            <textarea
              className={messageStyle}
              id="message"
              name="message"
              value={message.value}
              onChange={handleChange}
            />
            {messageError}

            {submissionError && 
              <p className="text-xl my-4 text-red-500">Desafortunadamente, hubo un error al enviar tu consulta. Por favor, intenta más tarde.</p>
            }
            <div className="flex flex-row items-center justify-end  align-center px-auto w-full mt-4">
            <a
              onClick={() => {
                setOpen(false)
              }}
              className="mx-3 font-bold hover:underline text-xl"
            >
              Cancelar
            </a>
            <button
              type="submit"
              className="  bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors text-xl"
            >
              Enviar
            </button>
            
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

const FormError = (field: FormField) => {
  return field.error && <p role="alert" className="text-red mb-4">{field.error}</p>
}
