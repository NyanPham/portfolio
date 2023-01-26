import React from "react"
import "../styles/ProjectSlideStyle.css"

export default function ProjectSlide({ image, title, description, demoLink, githubLink }) {
    return (
        <div className="swiper-data">
            <div className="project-image-container">
                <img className="project-image" src={image} alt={title} />
            </div>

            <div className="project-data">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <a href={demoLink} target="_blank" rel="noreferrer">
                    <button className="demo-btn">Demo</button>
                </a>
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <button className="github-btn">Github</button>
                </a>
            </div>
        </div>
    )
}
