import classes from './projects.module.scss'
import React from 'react'
import beerapp from '../../images/beer-app.jpg'
const Projects = ()=>{
    const projects=[
        {
            id:1,
            name: "Beer app",
            image: '../../images/beer-app.jpg'
        },
        {
            id:1,
            name: "Beer app",
            image: beerapp
        }
    ]
    
    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
                {projects.map(project=>
                    <div key={project.id}>
                        <img src={project.image} alt={project.name}></img>
                    </div>)}
            </main>
        </div>
    )
}
export default Projects