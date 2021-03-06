import classes from './projects.module.scss'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = ()=>{
    const projects=[
        {
            id:1,
            name: "Beer app",
            image: "../../images/beer-app.jpg"
        },
        {
            id:1,
            name: "Beer app",
            image: "../../images/beer-app.jpg"
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className={classes.projects}>
            <header>
                <p>Projects</p>
            </header>
            <main>
            <Slider {...settings}>
                {projects.map(project=><div key={project.id}>
                        <img  src={project.image} height='10rem' alt={project.name}></img>
                    </div>
                )}
                <div>
                        <img  src={projects[0].image} height='10rem' alt={projects[0].name}></img>
                    </div>
            </Slider>
            </main>
        </div>
    )
}
export default Projects