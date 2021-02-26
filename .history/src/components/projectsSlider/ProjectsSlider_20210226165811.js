import classes from './projectSlider.module.scss'
import React, {useState} from 'react'
import projectsData from '../../data/projectsData'

const ProjectsSlider =()=>{
    const [current, setCurrent]=useState(0)
    const length= projectsData.length
    return(
        <div className={classes.slider}>
            <button className={classes.left_arrow}>Prev</button>
            <button className={classes.right_arrow}>Next</button>
            {projectsData.map((project, index)=>
                <div key={project.id}>
                    <img src={project.image} alt={project.name}></img>
                </div>)}
        </div>
    )
}
export default ProjectsSlider