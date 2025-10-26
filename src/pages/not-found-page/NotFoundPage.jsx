import { Header } from "../../components/header/Header"

import "./NotFoundPage.css";

export function NotFoundPage()
{
    return (
        <section className="not-found">
            <Header />
            <div class="content">
                <img src="/images/sad-256.png" alt="Error 404" />
                <h1>404</h1>
                <h2>Page not found</h2>

                <p>
                    The Page you are looking for doesn't exist
                    or an other error has occured. 
                </p>
            </div>
        </section>
    )
}