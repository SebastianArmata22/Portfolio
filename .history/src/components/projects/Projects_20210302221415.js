import classes from './projects.module.scss'
import projectsData from '../../data/projectsData'
import React from 'react'
import ProjectItem from '../projectItem/ProjectItem'
const Projects = ()=>{

    return(
        <div className={classes.projects}>
            <header>
                <p>&lt;Projects</p>
            </header>
            <main>
                {projectsData.map((project)=>< ProjectItem project={project}/>)}
            </main>
        </div>
    )
}
export default Projects