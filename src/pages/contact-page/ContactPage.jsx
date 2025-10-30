import "./ContactPage.css";

import { ContactForm } from "./ContactForm";
import { LoadAnimation } from "../../utils/animations";

export function ContactPage({setShowMessage})
{
    return (
        <>
        <section className="contact" id="contact">
            <div className="contact-container">
                
                <LoadAnimation dur={.8}>
                    <h1 className="contact-form-h1">Get In Touch</h1>
                </LoadAnimation>
                
                <LoadAnimation>
                    <ContactForm setShowMessage={setShowMessage} />
                </LoadAnimation>
            </div>
        </section>
        </>
    )
}