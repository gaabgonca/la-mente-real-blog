import Link from "next/link";
import { useContext } from "react";
import { OpenFormContext } from "../contexts/contact-form-context";

export default function ContactMe({intro} : {intro: string}) {
    const {open, setOpen} = useContext(OpenFormContext)
    return (
        <div className="max-w-4xl mx-auto markdown-container p-4 border rounded-xl bg-gray-50">
        <p className="text-2xl text-gray-700 italic">{intro + "no dudes en "}<a className="font-bold underline text-blue-500"onClick={() => setOpen(true)}>contactarme</a></p>
        </div>
    )
}