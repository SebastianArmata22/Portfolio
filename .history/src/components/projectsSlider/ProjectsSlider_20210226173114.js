import classes from './projectSlider.module.scss'
import React, {useState} from 'react'
import projectsData from '../../data/projectsData'

const ProjectsSlider =()=>{
    const [current, setCurrent]=useState(0)
    const [background, setBackground]=useState(projectsData[0].image)
    const length= projectsData.length

    const nextSlide = () =>{
        setCurrent(current===length-1 ? 0 : current+1)
        setBackground(projectsData[current].image)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1 : current-1)
        setBackground(projectsData[current].image)
    }
    return(
        <div className={classes.slider}>
            <button className={classes.left_arrow} onClick={prevSlide}>Prev</button>
            <button className={classes.right_arrow} onClick={nextSlide}>Next</button>
            {projectsData.map((project, index)=>
                <div key={project.id} >
                    {index===current &&<div className={classes.project} style={{ backgroundImage: `url(${background})` }}></div>}
                </div>)}
        </div>
    )
}
export default ProjectsSlider