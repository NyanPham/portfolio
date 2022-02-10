import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SkillSet({skillSetName, icon, skills}) {
    return (
        <div className="set">
            <div className="set-header">
                <FontAwesomeIcon icon={icon} />
                <span>{skillSetName}</span>
            </div>
            <div className="learned-items">
                {skills?.map((skill, index) => {
                    return <LearnedSKill key={index} skill={skill}/>
                })}
            </div>
        </div>
    )
}


function LearnedSKill({skill}) {
    return (
        <div className="item">      
            <span className="item-name">{skill}</span>
            <span className="dot" />
            <span className="line"></span>
        </div>
    )
}