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
                <div>
                    <div className={classes.bar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ConsoleSkills />
                </div>
            </main>
        </div>
    )
}
export default Skills