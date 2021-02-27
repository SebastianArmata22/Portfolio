import classes from './projects.module.scss'
import projectsData from '../../data/projectsData'
import React, { useState } from 'react'
const Projects = ()=>{
    const [isChecked, setIsChecked]=useState(false)
    const changeIsChecked=()=>{
        setIsChecked(prev=>!prev)
    }
    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
                {projectsData.map((project)=>{return(
                    <div className={isChecked ? [classes.project_item, classes.active].join(' ') : classes.project_item} onClick={changeIsChecked}>
                        <div className={classes.active_hover}>
                            <p>{project.name}</p>
                            <button>Live</button>
                            <button>GitHub</button>
                        </div>
                        <img src={project.image} alt={project.name}></img>
                    </div>
                )})}
            </main>
        </div>
    )
}
export default Projects