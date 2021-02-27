import classes from './projects.module.scss'
import projectsData from '../../data/projectsData'
import React from 'react'
const Projects = ()=>{

    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
                {projectsData.map((project)=>{return(
                    <div>
                        <img src={project.image} alt={project.name}></img>
                    </div>
                )})}
            </main>
        </div>
    )
}
export default Projects