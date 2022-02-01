import React from 'react';
import '../styles/PortfolioStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectSlide from './ProjectSlide'

export default function Portfolio() {

    const projectsData = [
        {
            imgId: 'id-1' ,
            title: 'Nyan Drive',
            description: 'A functional Google-Drive-like app where users can sign up, login, create folders, add files, update and delete them.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            imgId: 'id-2',
            title: 'Todo App',
            description: 'A typical, yet not simple project about CRUD operation, which indeed is necessary in any interactive web application.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            imgId: 'id-3',
            title: 'PokeDex',
            description: 'A great simple simulator of PokeDex can satisfy your every wish to know a pokemon\'s information.',
            demoLink: '#',
            githubLink: '#'
        },
    ] 

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={ 1 } className="work-swipers">
                {projectsData.map((project, index) => {
                    return (
                        <SwiperSlide key={`swiper_${index}`}>
                            <ProjectSlide 
                                imgId={project.imgId} 
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
