import classes from './skills.module.scss'
import React from 'react'
import ConsoleSkills from '../consoleSkills/ConsoleSkills'

const Skills = ()=>{

    return(
        <div className={classes.skills}>
            <header>
                <p>Skills</p>
            </header>
            <main>
                <div>
                </div>
                <div className={classes.console_container}>
                    <div className={classes.bar}>
                        <div className={classes.red}></div>
                        <div className={classes.yellow}></div>
                        <div className={classes.green}></div>
                    </div>
                    <ConsoleSkills />
                </div>
            </main>
        </div>
    )
}
export default Skills