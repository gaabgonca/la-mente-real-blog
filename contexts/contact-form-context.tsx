/**
 * This context and provider allows to open and close the contact form from anywhere in the app
 * and provides the ContactForm component
 */

import React, {ReactElement , useState} from "react";
import ContactForm from "../components/contact-form";

export type OpenState = {
    open?: boolean,
    setOpen?: (boolean) => void
}

export const OpenFormContext = React.createContext<OpenState>({});

export const OpenFormProvider = ({children} : {children : ReactElement}) => {
    const [open,setOpen] = useState<boolean>(false)

    return (
        <OpenFormContext.Provider value = {{open,setOpen}}>
            {children}
            <ContactForm/>
        </OpenFormContext.Provider>
    )
}

