import React from 'react';
import '../styles/FooterStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <h2 className="my-jap-name">Nyan</h2>         
            
            <div className="conclusion">
                <h3 className="position">Frontend Developer</h3>
                <p>
                    One last thing,  do you know how cats meow in Japanese? 
                    “Nyan”. That’s how you call my name...
                </p>
            </div>

            <h3 className="links">Links</h3>
            <div className="links-items">
                <a href="#portfolio">Portfolio</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div> 

            <h3 className="social">Social media</h3>
            <div className="social-items">
                <a href="https://github.com/NyanPham" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/nhan-pham-84a602232/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p className="copyright">&copy;2022 | Built by Pham Thanh Nhan</p>
        </footer>
    )
}
