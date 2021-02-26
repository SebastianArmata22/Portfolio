import React from 'react'
import projectsData from '../../data/projectsData'

const ProjectsSlider =()=>{
    return(
        <div>
            {projectsData.map((project, index)=>
                <div key={project.id}>
                    <img src={project.image} alt={project.name}></img>
                </div>)}
        </div>
    )
}
export default ProjectsSlider