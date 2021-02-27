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
                    <div style={{backgroundImage: `url(${project.image})`}}></div>
                )})}
            </main>
        </div>
    )
}
export default Projects