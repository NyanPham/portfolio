import React, { useState, useEffect, useCallback } from "react"
import "../styles/NavbarStyle.css"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Navbar({ darkTheme, handleThemeChange }) {
    const [activeSection, setActiveSection] = useState("home")
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [dropdownActive, setDropDownActive] = useState(false)
    const getAllSections = useCallback(() => {
        return document.querySelectorAll("section")
    }, [])

    useEffect(() => {
        const sections = getAllSections()
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.7, rootMargin: "0px" }
        )
        sections.forEach((section) => {
            observer.observe(section)
        })
    }, [windowSize, getAllSections])

    window.addEventListener("resize", (e) => {
        setWindowSize(window.innerWidth)
    })

    function handleNavLinkClick(e) {
        if (!dropdownActive) return
        setDropDownActive(false)
    }

    return (
        <div className={`header ${darkTheme ? "dark" : ""}`}>
            <div className="logo-container">
                <div className="logo"></div>
            </div>
            <nav className={`${dropdownActive ? "dropdown-active" : ""}`}>
                <ul className="nav-links" onClick={handleNavLinkClick}>
                    <li>
                        <a href="#home" className={`${activeSection === "home" ? "active" : ""}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={`${activeSection === "about" ? "active" : ""}`}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className={`${activeSection === "skills" ? "active" : ""}`}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className={`${activeSection === "portfolio" ? "active" : ""}`}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={`${activeSection === "contact" ? "active" : ""}`}>
                            Contact
                        </a>
                    </li>
                    <div className="hover-layer"></div>
                </ul>
                <ThemeSwitcher handleThemeChange={handleThemeChange} darkTheme={darkTheme} />
                <div className="bars" onClick={() => setDropDownActive((prevDropdownActive) => !prevDropdownActive)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}
