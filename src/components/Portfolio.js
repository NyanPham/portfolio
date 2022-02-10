import React from 'react';
import '../styles/PortfolioStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectSlide from './ProjectSlide'
import nyanLogo from '../assets/nyan-logo.png'
import nyanDrive from '../assets/nyandrive.png'
import pokedexImg from '../assets/pokedex.png'


export default function Portfolio() {
    const projectsData = [
        {
            image: nyanDrive ,
            title: 'Nyan Drive',
            description: 'A functional Google-Drive-like app where users can sign up, login, create folders, add files, update and delete them.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            image: nyanLogo,
            title: 'Todo App',
            description: 'A typical, yet not simple project about CRUD operation, which indeed is necessary in any interactive web application.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            image: pokedexImg,
            title: 'PokeDex',
            description: 'A great simple simulator of PokeDex can satisfy your every wish to know a pokemon\'s information.',
            demoLink: '#',
            githubLink: '#'
        },
    ] 

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={ 1 } spaceBetween={50} className="work-swipers">
                {projectsData.map((project, index) => {
                    return (
                        <SwiperSlide key={`swiper_${index}`}>
                            <ProjectSlide 
                                image={project.image} 
                                title={project.title}
                                description={project.description}
                                demoLink={project.demoLink}
                                githubLink={project.githubLink}
                            />
                        </SwiperSlide>
                    )
                })}  
            </Swiper>
            
        </section>
    )
}
