import React from "react"
import "../styles/PortfolioStyle.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import ProjectSlide from "./ProjectSlide"
import todo from "../assets/todo.png"
import gentleNyan from "../assets/gentleNyan.png"
import pokedexImg from "../assets/pokedex.png"
import weather from "../assets/weatherForecast.png"
import IPA from "../assets/nyan-ipa.jpg"
import nyanStore from "../assets/nyan-store.jpg"

export default function Portfolio() {
    const projectsData = [
        {
            image: nyanStore,
            title: "Nyan Market Store",
            description:
                "A functional Ecommerce website with most useful functionalities such as auth system, sidebar cart, wishlist, payment, admin panels for shop owner in ReactJS and NodeJS.",
            demoLink: "https://elaborate-chimera-ea1e59.netlify.app/",
            githubLink: "https://github.com/NyanPham/Nyan-Store",
        },
        {
            image: gentleNyan,
            title: "Nyan Male Shop",
            description:
                "A functional male eccomerce where users can sign up, login, add items to cart, change them and pay their bill.",
            demoLink: "https://kind-jepsen-d6f299.netlify.app/",
            githubLink: "https://github.com/NyanPham/gentlenyanstore-client",
        },
        {
            image: pokedexImg,
            title: "PokeDex",
            description:
                "A great simple simulator of PokeDex that can satisfy your every wish to know a pokemon's information.",
            demoLink: "https://amazing-minsky-880311.netlify.app/",
            githubLink: "https://github.com/NyanPham/pokedex-v2",
        },
        {
            image: todo,
            title: "Todo App",
            description:
                "A typical, yet not simple project about CRUD operation, which indeed is necessary in any interactive web application.",
            demoLink: "https://awesome-perlman-08271d.netlify.app/",
            githubLink: "https://github.com/NyanPham/todo-app-react",
        },

        {
            image: weather,
            title: "Weather Forecast",
            description:
                "An app to forecast the next 3 days in Ho Chi Minh City. Don't forget to bring coat to avoid overheating and an umbrella in rainy season.",
            demoLink: "https://keen-lewin-897206.netlify.app/",
            githubLink: "https://github.com/NyanPham/weather-app-js",
        },
        {
            image: IPA,
            title: "English IPA System",
            description: "A perfect tool for teachers to demonstrate the articulation of sounds in English.",
            demoLink: "https://spectacular-genie-a86de2.netlify.app/",
            githubLink: "https://github.com/NyanPham/nyan-ipa",
        },
    ]

    return (
        <section id="portfolio">
            <h2>My Creations</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={50}
                className="work-swipers"
            >
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
