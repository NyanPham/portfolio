import React from 'react'
import '../styles/HomeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <section id="home">
            <div className="profile-image">
                
            </div>
            <div className='greeting'>
                <h2>Hy, I'm <span className="my-name">Nyan</span></h2>
                <p className="position">Frontend Developer</p>
                <p className="greeting-text">
                    I am a self-taught frontend dev with special attention to logic and workflow.
                </p>
                <button className="contact-button">
                    <span>Contact me</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
            <div className="social-links">
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <button className='scroll-indicator'>

            </button>
        </section>
    )
}