import classes from './projects.module.scss'
import React from 'react'
import Slider from "react-slick";
const Projects = ()=>{
    const projects=[
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
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
            </main>
        </div>
    )
}
export default Projects