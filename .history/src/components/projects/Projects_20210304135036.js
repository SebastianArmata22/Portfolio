import classes from './projects.module.scss'
import projectsData from '../../data/projectsData'
import React, { useState } from 'react'
import ProjectItem from '../projectItem/ProjectItem'
import { RoughNotation } from 'react-rough-notation'
import VisibilitySensor  from 'react-visibility-sensor'

const Projects = ()=>{
    const [visible,setVisible]=useState(false)
    const onChange=(isVisible)=>{
        isVisible && setVisible(true)
    }
    return(
        <div className={classes.projects}>
            <header>
            <VisibilitySensor  onChange={onChange}>
            <RoughNotation type="box" show={visible} color="#FFB300" padding={5} iterations="3" animationDelay="500" animationDuration="3000">
                <p>Projects</p>
            </RoughNotation>
            </VisibilitySensor>
            </header>
            <main>
                {projectsData.map((project)=>< ProjectItem project={project}/>)}
            </main>
        </div>
    )
}
export default Projects