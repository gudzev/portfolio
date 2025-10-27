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
                    </div>
                    <div className="personal-image">
                        <img src="/images/person.webp" className="personal-img" alt="Personal image"/>
                    </div>

                    <div className="personal-tech-stack">
                        <h3>Tech Stack</h3>
                        <img src="images/html.webp" className="tech-stack-img" alt="HTML" />
                        <img src="images/css.webp" className="tech-stack-img" alt="CSS" />
                        <img src="images/js.webp" className="tech-stack-img" alt="JavaScript" />
                        <img src="images/react.webp" className="tech-stack-img" alt="React" />
                        <img src="images/git.webp" className="tech-stack-img" alt="Git" />
                    </div>

                </div>
            </div>
        </section>
    );
}