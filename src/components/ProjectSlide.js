import React from 'react';
import '../styles/ProjectSlideStyle.css'

export default function ProjectSlide({imgId, title, description, demoLink, githubLink}) {
   
    function handleDemoClick() {

    }

    return (
        <div className="swiper-data">
            <img className={`project-image ${imgId}`}/>
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
