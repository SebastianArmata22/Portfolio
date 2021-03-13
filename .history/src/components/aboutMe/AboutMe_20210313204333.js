import classes from './aboutme.module.scss'
import React, {useState} from 'react'
import { RoughNotation } from 'react-rough-notation'
import VisibilitySensor  from 'react-visibility-sensor'

const AboutMe = ({refAbouMe})=>{
    const [visible,setVisible]=useState(false)
    const onChange=(isVisible)=>{
        isVisible ? setVisible(true) : setVisible(false)
    }
    return(
        <div className={classes.aboutMe} ref={refAbouMe}>
            <header>
            <VisibilitySensor  onChange={onChange}>
            <RoughNotation type="box" show={visible} color="#FFB300" padding={5} iterations="3" animationDelay="500" animationDuration="1500">
                <p>About me</p>
            </RoughNotation>
            </VisibilitySensor>
            </header>
            <main>
                <div className={classes.MyImage}>
                    <img src="/images/DSC_0186.jpg" alt="Me"></img>
                </div>
                <div className={classes.text}>
                    <div className={classes.textAbouMe}>
                        <p>Hi,</p>
                        <p>
                            My name is Sebastian Armata and I am a third-year student of Applied Computer Science at the Cracow University of Technology. I'm 21.
                            I've been interested in frontend for two years.
                            I create websites based on HTML, CSS, JavaScript and React technologies.
                            Nowadays I spend most of my time developing my skills and I am in the process of creating a project in a team of four supporting the management of a transport company.

                        </p>
                    </div>
                    <div className={classes.schoolInformation}>
                        <ul>
                            <li>
                                <span>09.2015 - 04.2018</span>
                                <p className={classes.school}>High School in Bogoria</p>
                                <span>Mathematical, physical and IT profile</span>
                            </li>
                            <li>
                                <span>10.2018 - present</span>
                                <p className={classes.school}>Cracow University of Technology</p>
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