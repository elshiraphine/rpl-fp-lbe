/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../css/Navbar.css"
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div class="navpanel">
            <header class="navbar">
                <div className="height-prop">
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <ul class="navlinks">
                        <li><a href="#">Alert</a></li>
                        <li><a href="#">Learn</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
