import React from 'react';
import '../styles/ProjectSlideStyle.css'

export default function ProjectSlide({image, title, description, demoLink, githubLink}) {
   
    function handleDemoClick() {
        if (demoLink === '#') return
        const link = document.createElement('a')
        link.href = demoLink
        link.target = "_blank"
        link.click()
    }

    return (
        <div className="swiper-data">
            <div className="project-image-container">
                <img className='project-image' src={image} alt={title}/>
            </div>
           
            <div className="project-data">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <button className="demo-btn" onClick={handleDemoClick}>
                    Demo
                </button>
            </div>
        </div>
    )
}
