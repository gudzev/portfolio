import emailjs from  '@emailjs/browser';

import { useRef, useState } from 'react';

export function ContactForm({setShowMessage})
{
    const [isDisabled, setIsDisabled] = useState(false);
    const [btnText, setBtnText] = useState("Submit");
    const form = useRef();

    const sendEmail = (e) => 
    {
        setBtnText("Sending...");
        setIsDisabled(true);
        e.preventDefault();

        emailjs.sendForm('service_h1tleyp', 'template_8ktgdco', form.current, 
        {
            publicKey: import.meta.env.VITE_public_key,
        })
        .then(() => 
            {
                setShowMessage(1)
            },
            () => 
            {
                setShowMessage(-1);
            },
        ).finally(() =>
        {
            setBtnText("Submit");
            setIsDisabled(false);

            setTimeout(() =>
            {
                setShowMessage(0);
            }, 5000);
        });
    };

    return (
        
        <form className="contact-form" method="POST" data-netlify="true" ref={form} onSubmit={sendEmail}>
            <div className="contact-form-row">
                <input type="text" name="name" className="form-input" placeholder="Your Name..." required/>
            </div>

            <div className="contact-form-row">
                <input type="email" name="email" className="form-input" placeholder="Your E-Mail..." required/>
            </div>

            <div className="contact-form-row">
                <textarea className="form-textarea" name="message" placeholder="Your Message..." rows="12" required />
            </div>

            <div className="contact-form-row">
                <button className="btn" type="submit" disabled={isDisabled} >{btnText}</button>
            </div>
        </form>
    )
}