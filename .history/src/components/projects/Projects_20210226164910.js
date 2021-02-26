import classes from './projects.module.scss'
import React from 'react'
import ProjectsSlider from '../projectsSlider/ProjectsSlider'
const Projects = ()=>{

    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
                <ProjectsSlider />
            </main>
        </div>
    )
}
export default Projects