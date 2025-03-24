import React from "react";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <a href="/" className="logo">
                    MyWebsite
                </a>

                {/* Desktop Links */}
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                {/* Hamburger Menu Button */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
