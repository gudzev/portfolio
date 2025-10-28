import "./ContactPage.css";

import { ContactForm } from "./ContactForm";

export function ContactPage({setShowMessage})
{
    return (
        <>
        <section className="contact" id="contact">
            <div className="contact-container">
                <h1 className="contact-form-h1">Get In Touch</h1>
                <ContactForm setShowMessage={setShowMessage} />
            </div>
        </section>
        </>
    )
}