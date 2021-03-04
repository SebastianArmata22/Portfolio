import classes from './aboutme.module.scss'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'
const AboutMe = ()=>{
    return(
        <div className={classes.aboutMe}>
            <header>
            <RoughNotation type="box" show={true} color="#FFB300" padding={5} iterations="3" animationDelay="500" animationDuration="1500">
                <p>About me</p>
                </RoughNotation>
            </header>
            <main>
                <div></div>
                <div >
                    <div className={classes.textAbouMe}>
                        <p>Hi,</p>
                        <p>
                            My name is Sebastian Armata and I am a third-year student of Applied Computer Science at the Cracow University of Technology. I'm 21.
                            I've been interested in frontend for four years.
                            I create websites based on HTML, CSS, JavaScript and React technologies.
                            Nowadays I spend most of my time developing my skills.

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