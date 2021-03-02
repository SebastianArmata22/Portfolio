import classes from './aboutme.module.scss'
import React from 'react'

const AboutMe = ()=>{
    return(
        <div className={classes.aboutMe}>
            <header>
                <p>About me</p>
            </header>
            <main>
                <p>Hi,</p>
                <p>My name is Sebastian Armata and I am a third-year student of Applied Computer Science at the Cracow University of Technology. I've been interested in frontend for four years.</p>
            </main>
        </div>
    )
}
export default AboutMe