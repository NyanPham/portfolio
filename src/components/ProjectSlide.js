import React from 'react';
import '../styles/ProjectSlideStyle.css'

export default function ProjectSlide({image, title, description, demoLink, githubLink}) {
   
    function handleDemoClick() {
        //Add link here
    }

    return (
        <div className="swiper-data">
            <div className="project-image-container">
                <img className='project-image' src={image}/>
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
