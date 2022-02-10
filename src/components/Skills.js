import React, { useEffect } from 'react';
import '../styles/SkillsStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import SkillSet from './SkillSet'

export default function Skills() {

    return (
        <section id="skills" >
            <h2>My skills</h2>
            <div className="skill-sets">
                <SkillSet skillSetName='Frontend Developer' icon={faCode} skills={['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind']}/>
                <SkillSet skillSetName="Backend Developer" icon={faDatabase} skills={['Rest API', 'Firebase']}/>
                <SkillSet skillSetName='Others' icon={faCommentDots} skills={['Git/GitHub', 'NPM', 'English', 'Japanese']}/>
            </div>
        </section>
    )
}
