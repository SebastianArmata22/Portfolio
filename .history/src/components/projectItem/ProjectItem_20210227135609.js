import classes from './projectItem.module.scss'
import React, { useState } from 'react'

const ProjectItem = ({project}) =>{
    const [isChecked, setIsChecked]=useState(false)
    const changeIsChecked=()=>{
        setIsChecked(prev=>!prev)
    }
    return(
        <div className={isChecked ? [classes.project_item, classes.active].join(' ') : classes.project_item} onClick={changeIsChecked}>
        <div className={classes.active_hover}>
            <button>Live</button>
            <button>GitHub</button>
        </div>
        <img src={project.image} alt={project.name}></img>
    </div>
    )
}
export default ProjectItem