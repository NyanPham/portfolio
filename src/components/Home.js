import React from 'react'
import '../styles/HomeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

    function handleContactClick() {
        const a = document.createElement('a')
        a.href="#contact"
        a.click()
    }

    function toNextSection() {
        const a = document.createElement('a')
        a.href = '#about'
        a.click()
    }

    return (
        <section id="home" >
            <div className="home-left">
               <div className="profile-image"></div> 
            </div>
            <div className="home-right">
                <div className='greeting'>
                    <h2>Hy, I'm <span className="my-name">Nyan</span></h2>
                    <p className="position">Frontend Developer</p>
                    <p className="greeting-text">
                        I am a self-taught frontend dev with special attention to logic and workflow.
                    </p>
                    <div className="contact-and-social">
                        <button className="contact-button" onClick={handleContactClick}>
                            <span>Contact me</span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        <div className="social-links">
                            <div className="comment-box">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                                <p className="comment-text">Scroll down</p>
                            </div> 
                            <a href='https://www.linkedin.com/in/nhan-pham-84a602232/' className="fa" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href='https://github.com/NyanPham'  className="fa" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>                        
                            <button className='scroll-indicator paws' onClick={toNextSection}>
                                <svg className="paw paw-1" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1136 26.5003C17.6386 26.7128 16.0761 25.1003 15.6261 22.8753C15.1761 20.6628 15.9886 18.6878 17.4636 18.4628C18.9261 18.2378 20.5011 19.8503 20.9636 22.0753C21.4261 24.2878 20.5886 26.2628 19.1136 26.5003ZM10.1761 26.5003C8.68863 26.2628 7.86363 24.2878 8.30113 22.0753C8.77613 19.8503 10.3386 18.2378 11.8136 18.4628C13.3011 18.6878 14.1136 20.6628 13.6511 22.8753C13.2011 25.1003 11.6386 26.7128 10.1761 26.5003ZM25.8011 20.7503C24.3761 21.3628 22.4386 20.2503 21.4261 18.3128C20.4761 16.3378 20.8011 14.2628 22.2136 13.6503C23.6261 13.0378 25.5511 14.1378 26.5386 16.1003C27.5261 18.0628 27.1761 20.1503 25.8011 20.7503ZM3.30113 20.7503C1.92613 20.1503 1.57613 18.0628 2.56363 16.1003C3.55113 14.1378 5.47613 13.0378 6.88863 13.6503C8.30113 14.2628 8.62613 16.3378 7.67613 18.3128C6.66363 20.2503 4.72613 21.3628 3.30113 20.7503ZM5.38863 7.2753C5.33863 6.1003 6.23863 4.8003 7.31363 4.3128C9.55113 3.2878 12.2011 5.4128 14.6886 5.4128C17.1761 5.4128 19.8511 3.2003 22.0511 4.3128C23.3011 4.9253 24.1636 6.5503 24.0011 7.9003C23.7761 9.7628 21.5386 10.7628 20.2136 12.1253C18.4511 13.8878 17.2011 17.2003 14.6886 17.2003C12.1886 17.2003 10.8636 13.9378 9.17613 12.1253C7.78863 10.6003 5.47613 9.3128 5.38863 7.2753Z"/>
                                </svg>
                                <svg className="paw paw-2" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1136 26.5003C17.6386 26.7128 16.0761 25.1003 15.6261 22.8753C15.1761 20.6628 15.9886 18.6878 17.4636 18.4628C18.9261 18.2378 20.5011 19.8503 20.9636 22.0753C21.4261 24.2878 20.5886 26.2628 19.1136 26.5003ZM10.1761 26.5003C8.68863 26.2628 7.86363 24.2878 8.30113 22.0753C8.77613 19.8503 10.3386 18.2378 11.8136 18.4628C13.3011 18.6878 14.1136 20.6628 13.6511 22.8753C13.2011 25.1003 11.6386 26.7128 10.1761 26.5003ZM25.8011 20.7503C24.3761 21.3628 22.4386 20.2503 21.4261 18.3128C20.4761 16.3378 20.8011 14.2628 22.2136 13.6503C23.6261 13.0378 25.5511 14.1378 26.5386 16.1003C27.5261 18.0628 27.1761 20.1503 25.8011 20.7503ZM3.30113 20.7503C1.92613 20.1503 1.57613 18.0628 2.56363 16.1003C3.55113 14.1378 5.47613 13.0378 6.88863 13.6503C8.30113 14.2628 8.62613 16.3378 7.67613 18.3128C6.66363 20.2503 4.72613 21.3628 3.30113 20.7503ZM5.38863 7.2753C5.33863 6.1003 6.23863 4.8003 7.31363 4.3128C9.55113 3.2878 12.2011 5.4128 14.6886 5.4128C17.1761 5.4128 19.8511 3.2003 22.0511 4.3128C23.3011 4.9253 24.1636 6.5503 24.0011 7.9003C23.7761 9.7628 21.5386 10.7628 20.2136 12.1253C18.4511 13.8878 17.2011 17.2003 14.6886 17.2003C12.1886 17.2003 10.8636 13.9378 9.17613 12.1253C7.78863 10.6003 5.47613 9.3128 5.38863 7.2753Z"/>
                                </svg>
                                <svg className="paw paw-3" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1136 26.5003C17.6386 26.7128 16.0761 25.1003 15.6261 22.8753C15.1761 20.6628 15.9886 18.6878 17.4636 18.4628C18.9261 18.2378 20.5011 19.8503 20.9636 22.0753C21.4261 24.2878 20.5886 26.2628 19.1136 26.5003ZM10.1761 26.5003C8.68863 26.2628 7.86363 24.2878 8.30113 22.0753C8.77613 19.8503 10.3386 18.2378 11.8136 18.4628C13.3011 18.6878 14.1136 20.6628 13.6511 22.8753C13.2011 25.1003 11.6386 26.7128 10.1761 26.5003ZM25.8011 20.7503C24.3761 21.3628 22.4386 20.2503 21.4261 18.3128C20.4761 16.3378 20.8011 14.2628 22.2136 13.6503C23.6261 13.0378 25.5511 14.1378 26.5386 16.1003C27.5261 18.0628 27.1761 20.1503 25.8011 20.7503ZM3.30113 20.7503C1.92613 20.1503 1.57613 18.0628 2.56363 16.1003C3.55113 14.1378 5.47613 13.0378 6.88863 13.6503C8.30113 14.2628 8.62613 16.3378 7.67613 18.3128C6.66363 20.2503 4.72613 21.3628 3.30113 20.7503ZM5.38863 7.2753C5.33863 6.1003 6.23863 4.8003 7.31363 4.3128C9.55113 3.2878 12.2011 5.4128 14.6886 5.4128C17.1761 5.4128 19.8511 3.2003 22.0511 4.3128C23.3011 4.9253 24.1636 6.5503 24.0011 7.9003C23.7761 9.7628 21.5386 10.7628 20.2136 12.1253C18.4511 13.8878 17.2011 17.2003 14.6886 17.2003C12.1886 17.2003 10.8636 13.9378 9.17613 12.1253C7.78863 10.6003 5.47613 9.3128 5.38863 7.2753Z"/>
                                </svg>
                                <svg className="paw paw-4" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1136 26.5003C17.6386 26.7128 16.0761 25.1003 15.6261 22.8753C15.1761 20.6628 15.9886 18.6878 17.4636 18.4628C18.9261 18.2378 20.5011 19.8503 20.9636 22.0753C21.4261 24.2878 20.5886 26.2628 19.1136 26.5003ZM10.1761 26.5003C8.68863 26.2628 7.86363 24.2878 8.30113 22.0753C8.77613 19.8503 10.3386 18.2378 11.8136 18.4628C13.3011 18.6878 14.1136 20.6628 13.6511 22.8753C13.2011 25.1003 11.6386 26.7128 10.1761 26.5003ZM25.8011 20.7503C24.3761 21.3628 22.4386 20.2503 21.4261 18.3128C20.4761 16.3378 20.8011 14.2628 22.2136 13.6503C23.6261 13.0378 25.5511 14.1378 26.5386 16.1003C27.5261 18.0628 27.1761 20.1503 25.8011 20.7503ZM3.30113 20.7503C1.92613 20.1503 1.57613 18.0628 2.56363 16.1003C3.55113 14.1378 5.47613 13.0378 6.88863 13.6503C8.30113 14.2628 8.62613 16.3378 7.67613 18.3128C6.66363 20.2503 4.72613 21.3628 3.30113 20.7503ZM5.38863 7.2753C5.33863 6.1003 6.23863 4.8003 7.31363 4.3128C9.55113 3.2878 12.2011 5.4128 14.6886 5.4128C17.1761 5.4128 19.8511 3.2003 22.0511 4.3128C23.3011 4.9253 24.1636 6.5503 24.0011 7.9003C23.7761 9.7628 21.5386 10.7628 20.2136 12.1253C18.4511 13.8878 17.2011 17.2003 14.6886 17.2003C12.1886 17.2003 10.8636 13.9378 9.17613 12.1253C7.78863 10.6003 5.47613 9.3128 5.38863 7.2753Z"/>
                                </svg>
                                <svg className="paw paw-5" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1136 26.5003C17.6386 26.7128 16.0761 25.1003 15.6261 22.8753C15.1761 20.6628 15.9886 18.6878 17.4636 18.4628C18.9261 18.2378 20.5011 19.8503 20.9636 22.0753C21.4261 24.2878 20.5886 26.2628 19.1136 26.5003ZM10.1761 26.5003C8.68863 26.2628 7.86363 24.2878 8.30113 22.0753C8.77613 19.8503 10.3386 18.2378 11.8136 18.4628C13.3011 18.6878 14.1136 20.6628 13.6511 22.8753C13.2011 25.1003 11.6386 26.7128 10.1761 26.5003ZM25.8011 20.7503C24.3761 21.3628 22.4386 20.2503 21.4261 18.3128C20.4761 16.3378 20.8011 14.2628 22.2136 13.6503C23.6261 13.0378 25.5511 14.1378 26.5386 16.1003C27.5261 18.0628 27.1761 20.1503 25.8011 20.7503ZM3.30113 20.7503C1.92613 20.1503 1.57613 18.0628 2.56363 16.1003C3.55113 14.1378 5.47613 13.0378 6.88863 13.6503C8.30113 14.2628 8.62613 16.3378 7.67613 18.3128C6.66363 20.2503 4.72613 21.3628 3.30113 20.7503ZM5.38863 7.2753C5.33863 6.1003 6.23863 4.8003 7.31363 4.3128C9.55113 3.2878 12.2011 5.4128 14.6886 5.4128C17.1761 5.4128 19.8511 3.2003 22.0511 4.3128C23.3011 4.9253 24.1636 6.5503 24.0011 7.9003C23.7761 9.7628 21.5386 10.7628 20.2136 12.1253C18.4511 13.8878 17.2011 17.2003 14.6886 17.2003C12.1886 17.2003 10.8636 13.9378 9.17613 12.1253C7.78863 10.6003 5.47613 9.3128 5.38863 7.2753Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}