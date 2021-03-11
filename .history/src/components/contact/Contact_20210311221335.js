import classes from './contact.module.scss'
import React, { useState } from 'react'
import EmailForm from '../emailForm/EmailForm'
import { RoughNotation } from 'react-rough-notation'
import VisibilitySensor  from 'react-visibility-sensor'

const Contact = ({refContact})=>{
    const linkedin="www.linkedin.com/in/sebastian-armata"
    const github="www.github.com/SebastianArmata22"
    const [Visible,setVisible]=useState(false)
    const onChange=(isVisible)=>{
        isVisible ? setVisible(true) : setVisible(false)
    }
    return(
        <div className={classes.contact} ref={refContact}>
        <header>
        <VisibilitySensor  onChange={onChange}>
            <RoughNotation type="box" show={Visible} color="#FFB300" padding={5} iterations="3" animationDelay="500" animationDuration="1500">
                <p>Contact</p>
            </RoughNotation>
        </VisibilitySensor>
        </header>
        <main>
            <div>
                <div className={classes.contact_info}>
                    <p><span>email: </span><a href="mailto:sebastian.armata22@gmail.com">sebastian.armata22@gmail.com</a></p>
                    <p><span>phone: </span><a>+48  726 873 385</a></p>
                    <p><span>LinkedIn: </span><a href={linkedin} target="_blank" >{linkedin}</a></p>
                    <p><span>GitHub: </span><a href={github} target="_blank">{github}</a></p>

                </div>
            </div>
            <div>
                <EmailForm />
            </div>
        </main>
    </div>
    )
}
export default Contact