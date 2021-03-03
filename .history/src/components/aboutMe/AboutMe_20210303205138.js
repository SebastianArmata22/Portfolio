import classes from './aboutme.module.scss'
import React, { useState } from 'react'
import { RoughNotation } from "react-rough-notation";
const AboutMe = ()=>{
    const [isScroll, setIsScrool]=useState(false)
    const changeIsScroll=()=>{
        setIsScrool(true)
    }
    return(
        <div className={classes.aboutMe} isScroll={changeIsScroll}>
            <header>
            <RoughNotation type="box" show={isScroll} color="#FFB300" padding={5} strokeWidth={1} iterations="2" animationDelay="500" animationDuration="2000">
                <p>About me</p>
            </RoughNotation>
            </header>
            <main>
                <div></div>
                <div >
                    <div className={classes.textAbouMe}>
                        <p>Hi,</p>
                        <p>
                            My name is Sebastian Armata and I am a third-year student of Applied Computer Science at the Cracow University of Technology.
                            I've been interested in frontend for four years.
                            I create websites based on HTML, CSS, JavaScript and React technologies.
                            Nowadays I spend most of my time developing my skills.
                            I spend my free time playing board games.

                        </p>
                    </div>
                    <div className={classes.schoolInformation}>
                        <ul>
                            <li>
                                <span>09.2015 - 04.2018</span>
                                <p className={classes.school}>Secondary school im. Jana Pawła II</p>
                                <span>Mathematical, physical and IT profile</span>
                            </li>
                            <li>
                                <span>10.2018 - currency</span>
                                <p className={classes.school}>Cracow University of Technology Tadeusz Kościuszko</p>
                                <span>Applied Computer Science</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default AboutMe