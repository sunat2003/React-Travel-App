import './Navbar.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { TbGridDots } from 'react-icons/tb';


export function Navbar() {
    const [active, setActive] = useState("navBar");

    //function for toggle navbar
    function showNav() {
        setActive("navBar activeNavbar")
    }
    function removeNav() {
        setActive("navBar");
    }
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1><FontAwesomeIcon icon={faEarthAmericas} className="icons" />Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItems"><a href="#" className="navLink">Home</a></li>
                        <li className="navItems"><a href="#" className="navLink">Pakages</a></li>
                        <li className="navItems"><a href="#" className="navLink">Shope</a></li>
                        <li className="navItems"><a href="#" className="navLink">About</a></li>
                        <li className="navItems"><a href="#" className="navLink">Pages</a></li>
                        <li className="navItems"><a href="#" className="navLink">News</a></li>
                        <li className="navItems"><a href="#" className="navLink">Contracts</a></li>
                        <button className="btn nav-btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div className="closeNav" onClick={removeNav}>
                        <FontAwesomeIcon icon={faXmark} className="icons" />
                    </div>
                </div>
                <div className="toggleNavBar" onClick={showNav}>
                    <TbGridDots className="icons" />
                </div>
            </header>
        </section>
    )
}