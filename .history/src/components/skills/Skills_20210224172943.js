import classes from './skills.module.scss'
import React from 'react'

const Skills = ()=>{
    const text="<html></html>"
    return(
        <div className={classes.skills}>
            <header>
                <p>Skills</p>
            </header>
            <main>
                <div></div>
                <div>
                    <div>
                        {text}
                    </div>
                    <div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Skills