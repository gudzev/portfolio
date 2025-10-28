export function ContactForm()
{
    return (
        <form className="contact-form">
            <div className="contact-form-row">
                <input type="text" className="form-input" placeholder="Your Name..." required/>
            </div>

            <div className="contact-form-row">
                <input type="email" className="form-input" placeholder="Your E-Mail..." required/>
            </div>

            <div className="contact-form-row">
                <textarea className="form-textarea" placeholder="Your Message..." rows="12" required/>
            </div>

            <div className="contact-form-row">
                <button className="btn btn" type="submit">Submit</button>
            </div>
        </form>
    )
}