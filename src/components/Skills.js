import React, { useEffect } from 'react';
import '../styles/SkillsStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faCommentDots } from '@fortawesome/free-solid-svg-icons'


export default function Skills() {

    return (
        <section id="skills" >
            <h2>My skills</h2>
            <div className="skill-sets">
                <div className="set">
                    <div className="set-header">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Frontend Developer</span>
                    </div>
                    <div className="learned-items">
                        <div className="item">
                            <span className="item-name">HTML</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                        <div className="item">
                            <span className="item-name">CSS</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                        <div className="item">
                            <span className="item-name">JavaScript</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                        <div className="item">
                            <span className="item-name">React</span>
                            <span className="dot" />  
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
                <div className="set">
                    <div className="set-header">
                        <FontAwesomeIcon icon={faDatabase} />
                        <span>Backend Developer</span>
                    </div>
                    <div className="learned-items">
                        <div className="item">      
                            <span className="item-name">Rest API</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                        <div className="item">
                            <span className="item-name">Firebase</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
                <div className="set">
                    <div className="set-header">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span>Others</span>
                    </div>
                    <div className="learned-items">
                        <div className="item">
                            <span className="item-name">Git/Github</span>
                            <span className="dot" /> 
                            <span className="line"></span>                  
                        </div>
                        <div className="item">
                            <span className="item-name">NPM</span>
                            <span className="dot" />
                            <span className="line"></span>
                        </div>
                        <div className="item">
                            <span className="item-name">English</span>
                            <span className="dot" /> 
                            <span className="line"></span>                          
                        </div>
                        <div className="item">
                            <span className="item-name">Japanese</span>
                            <span className="dot" /> 
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
