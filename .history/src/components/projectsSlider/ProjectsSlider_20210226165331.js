import React, {useState} from 'react'
import projectsData from '../../data/projectsData'

const ProjectsSlider =()=>{
    const [current, setCurrent]=useState(0)
    const length= projectsData.length
    return(
        <div>
            <button>Prev</button>
            <button>Next</button>
            {projectsData.map((project, index)=>
                <div key={project.id}>
                    <img src={project.image} alt={project.name}></img>
                </div>)}
        </div>
    )
}
export default ProjectsSlider