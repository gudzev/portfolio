import { useState } from "react"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import "./Header.css";

export function Header()
{
    const [open, setOpen] = useState(true);

    let navbarHidden = (open !== true) ? "navbar-hidden" : "navbar-active";

    function toggleMenu()
    {
        setOpen(prev => !prev);
    }

    return (
        <header>
            <nav>
                <h2 className="header-h1"><a href="/">mg</a></h2>
                <FontAwesomeIcon icon={faBars} className={!navbarHidden} onClick={toggleMenu} aria-label="Open navigation menu" />
                <ul className={navbarHidden}>
                    <li><FontAwesomeIcon icon={faXmark} className="navbar-hidden" onClick={toggleMenu} aria-label="Close navigation menu" /></li>
                    <li onClick={toggleMenu}><a href="#home">Home</a></li>
                    <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
                    <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}