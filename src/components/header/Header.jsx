import { NavLink } from "react-router-dom";
import { useState } from "react"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import "./Header.css";

export function Header()
{
    const [open, setOpen] = useState(false);

    let closeClassName = (open === true) ? "navbar-hidden" : "navbar-active"; // for ul
    let openClassName = (open === true) ? "navbar-active" : "navbar-hidden"; // for faBars

    function toggleMenu()
    {
        setOpen(prev => !prev);
    }

    return (
        <header>
            <nav>
                <h2 className="header-h1"><NavLink to="/">Marko Gudžev</NavLink></h2>
                <FontAwesomeIcon icon={faBars} className={openClassName} onClick={toggleMenu} />
                <ul className={closeClassName}>
                    <li><FontAwesomeIcon icon={faXmark} className={closeClassName} onClick={toggleMenu} /></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#about">About</NavLink></li>
                    <li><NavLink to="#projects">Projects</NavLink></li>
                    <li><NavLink to="#contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}