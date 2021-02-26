import classes from './projects.module.scss'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beerapp from '../../images/beer-app.jpg'
const Projects = ()=>{
    const projects=[
        {
            id:1,
            name: "Beer app",
            image: beerapp
        },
        {
            id:1,
            name: "Beer app",
            image: beerapp
        }
    ]
    var settings = {
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
            <Slider {...settings}>
                {projects.map(project=><div key={project.id}>
                        <img  src={project.image} alt={project.name}></img>
                    </div>
                )}
            </Slider>
            </main>
        </div>
    )
}
export default Projects