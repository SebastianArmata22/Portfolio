import classes from './aboutme.module.scss'
import React from 'react'
const AboutMe = ()=>{
    return(
        <div className={classes.aboutMe}>
            <header>
                <p>About me</p>
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
                                <p className={classes.school}>Liceum Ogólnokształcące im. Jana Pawła II</p>
                                <span>Profil matematyczno-fizyczno-informatyczny</span>
                            </li>
                            <li>
                                <span>10.2018 - currency</span>
                                <p className={classes.school}>Politechnika Krakowska im. Tadeusza Kościuszki</p>
                                <span>Informatyka stosowana</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default AboutMe