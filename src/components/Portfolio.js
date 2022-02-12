import React from 'react';
import '../styles/PortfolioStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectSlide from './ProjectSlide'
import todo from '../assets/todo.png'
import gentleNyan from '../assets/gentleNyan.png'
import pokedexImg from '../assets/pokedex.png'


export default function Portfolio() {
    const projectsData = [
        {
            image: gentleNyan ,
            title: 'Nyan Male Shop',
            description: 'A functional male eccomerce where users can sign up, login, add items to cart and pay real money.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            image: todo,
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
