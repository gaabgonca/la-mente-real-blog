import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { OpenFormContext } from "../contexts/contact-form-context";
import cn from "classnames";

export default function ContactForm() {
  let { open, setOpen } = useContext(OpenFormContext);
  let [formState, setFormState] = useState({name: '', email: '', message: ''})

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };


  return (

      <Dialog className={"flex fixed top-0 left-0 z-10 w-full h-full items-center justify-center content-center"} open={open} onClose={() => setOpen(false)}>
        <div className="w-full h-full fixed top-0 left-0 z-10 bg-gray-200 opacity-50 "></div>
        <div  className="w-full h-full fixed top-0 left-0 z-10 flex items-center justify-center content-center">
        <Dialog.Panel className="bg-white w-3/6 h-4/6 p-8 md:py-12 shadow-xl">
          <Dialog.Title className="text-2xl font-bold mb-8">Deja aquí tu consulta</Dialog.Title>
          <Dialog.Description className="text-lg font-medium">
            Da el primer paso hacia una mejor salud mental. Si tienes alguna inquietud o necesitas ayuda, no dudes en dejar un mensaje. Recuerda que tu privacidad y confidencialidad están garantizadas.   
          </Dialog.Description>

          <form 
          className="w-full h-auto flex flex-col items-start justify-center py-4"
          accept-charset="UTF-8" action="https://www.formbackend.com/f/cca2307ed348c42a" method="POST">

                <label className="font-bold text-lg" htmlFor="name">Nombre</label>
                <input className="border border-solid border-2  rounded focus:rounded p-2 w-full mb-4"type="text" id="name" name="name" onChange={handleChange} required/>

                <label className="font-bold text-lg" htmlFor="email">Email</label>
                <input className="border border-solid border-2 rounded focus:rounded p-2 w-full mb-4" type="email" id="email" name="email" onChange={handleChange} required/>

                <label className="font-bold text-lg" htmlFor="message">Consulta</label>
                <textarea className="border border-solid border-2 rounded focus:rounded p-2 w-full mb-4" id="message" name="message" onChange={handleChange} required/>
                
            <button type="submit" className=" mx-auto bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0">Enviar</button>

          </form>
        </Dialog.Panel>
        </div>
      </Dialog>
  );
}
