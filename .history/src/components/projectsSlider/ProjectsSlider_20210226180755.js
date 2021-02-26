import classes from './projectSlider.module.scss'
import React, {useState} from 'react'
import projectsData from '../../data/projectsData'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const ProjectsSlider =()=>{
    const [current, setCurrent]=useState(0)
    const length= projectsData.length

    const nextSlide = () =>{
        setCurrent(current===length-1 ? 0 : current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1 : current-1)
    }
    return(
        <div className={classes.slider}>
            <button className={[classes.left_btn, classes.btn].join(' ')} onClick={prevSlide}><FaArrowLeft className={classes.arrow}/></button>
            <button className={[classes.right_btn, classes.btn].join(' ')} onClick={nextSlide}>< FaArrowRight className={classes.arrow}/></button>
            {projectsData.map((project, index)=>
                <div key={project.id}>
                    {index===current &&  <div className={classes.project}>
                        <img src={project.image} alt={project.name}></img>
                        </div>}

                </div>)}
        </div>
    )
}
export default ProjectsSlider