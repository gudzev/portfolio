import { Header } from "../../components/header/Header";

import "./HomePage.css";

export function HomePage()
{
    return (
        <section className="home" id="home">
            <Header />

            <div className="home-container">
                <div className="home-information">
                    <div className="personal-information">
                        <h1>Marko Gudžev</h1>
                        <h3>A software engineering student.</h3>

                        <div className="btns">
                            <a className="btn" href="#projects">
                                View Projects
                            </a>

                            <a className="btn" href="#">
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="personal-image">
                        <img src="/images/me.webp" className="personal-img" alt="Personal image" loading="lazy"/>
                    </div>

                    <div className="personal-tech-stack">
                        <h3>Technologies I've worked with</h3>
                        <img src="images/html.webp" className="tech-stack-img" alt="HTML" loading="lazy" />
                        <img src="images/css.webp" className="tech-stack-img" alt="CSS" loading="lazy" />
                        <img src="images/js.webp" className="tech-stack-img" alt="JavaScript" loading="lazy" />
                        <img src="images/react.webp" className="tech-stack-img" alt="React" loading="lazy" />
                        <img src="images/git.webp" className="tech-stack-img" alt="Git" loading="lazy" />
                    </div>

                </div>
            </div>
        </section>
    );
}