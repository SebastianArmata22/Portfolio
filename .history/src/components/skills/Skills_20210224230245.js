import classes from './skills.module.scss'
import React from 'react'
import ConsoleSkills from '../consoleSkills/ConsoleSkills'
import htmlImg from '../../icons/html5-with-wordmark-color.svg'
import cssImg from '../../icons/css3(1).svg'
import jsImg from '../../icons/javascript-js-seeklogo.com.svg'
import reactImg from '../../icons/reactjs-icon.svg'
import sassImg from '../../icons/sass-1.svg'
import mysqlImg from '../../icons/mysql-ar21.svg'

const Skills = ()=>{

    return(
        <div className={classes.skills}>
            <header>
                <p>Skills</p>
            </header>
            <main>
                <div className={classes.logo_container}>
                    <div>
                        <div className={classes.logo}>
                            <img src={htmlImg} alt='html'></img>
                            <p>HTML5</p>
                        </div>
                        <div className={classes.logo}>
                            <img src={cssImg} alt='css'></img>
                            <p>CSS3</p>
                        </div>
                        <div className={classes.logo}>
                            <img src={reactImg} alt='react'></img>
                            <p>React</p>
                        </div>
                        <div className={classes.logo}>
                            <img src={sassImg} alt='sass'></img>
                            <p>Sass</p>
                        </div>
                        <div className={classes.logo}>
                            <img src={mysqlImg} alt='mysql'></img>
                            <p>MySQL</p>
                        </div>
                        <div className={classes.logo}>
                            <img src={jsImg} alt='js'></img>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className={classes.console_container}>
                    <div className={classes.bar}>
                        <div className={classes._green}></div>
                        <div className={classes._yellow}></div>
                        <div className={classes._red}></div>
                    </div>
                    <ConsoleSkills />
                </div>
            </main>
        </div>
    )
}
export default Skills