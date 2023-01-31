import React, { useRef } from "react"
import "../styles/SkillsStyle.css"
import { faCode, faDatabase, faCommentDots } from "@fortawesome/free-solid-svg-icons"
import SkillSet from "./SkillSet"
import useOnScreen from "../hooks/useOnScreen"

export default function Skills() {
    const skillRef = useRef()
    const isVisible = useOnScreen(skillRef)

    return (
        <section id="skills" ref={skillRef} className={isVisible && "visible"}>
            <h2>My skills</h2>
            <div className="skill-sets">
                <SkillSet
                    skillSetName="Frontend"
                    icon={faCode}
                    skills={["HTML", "CSS", "JavaScript", "React", "Tailwind"]}
                />
                <SkillSet
                    skillSetName="Backend"
                    icon={faDatabase}
                    skills={["Rest API", "Firebase", "NodeJS", "Express", "MongoDB"]}
                />
                <SkillSet
                    skillSetName="Others"
                    icon={faCommentDots}
                    skills={["Git/GitHub", "NPM", "English", "Japanese", "Liquid"]}
                />
            </div>
        </section>
    )
}
