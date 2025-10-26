import "./Footer.css";

export function Footer()
{
    let currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">

                <div className="footer-navigation">
                    <div>
                        <h2 className="footer-h2">Navigation</h2>
                    </div>
                    <div className="flex-column">
                        <a href="#home" className="footer-link">Home</a>
                        <a href="#about" className="footer-link">About</a>
                        <a href="#projects" className="footer-link">Projects</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>
                </div>

                <div className="footer-contact">
                    <div>
                        <h2 className="footer-h2">Contact Information</h2>
                    </div>
                    <div>
                        <p className="footer-p">E-Mail: <a href="mailto:mgudzev@gmail.com">mgudzev@gmail.com</a></p>
                        <p className="footer-p">Location: Serbia, Zrenjanin</p>
                    </div>
                </div>

                <div className="footer-social">
                    <div>
                        <h2 className="footer-h2">Social Information</h2>
                    </div>
                    <div>
                        <a href="https://github.com/gudzev" className="footer-link" target="_blank">GitHub</a>
                    </div>
                </div>

                <div className="footer-legal">
                    &copy; {currentYear} Marko Gudžev. All rights deserved.
                </div>
            </div>
        </footer>
    )
}