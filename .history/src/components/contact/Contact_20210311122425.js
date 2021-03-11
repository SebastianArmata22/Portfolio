import classes from './contact.module.scss'
import React, { useState } from 'react'
import EmailForm from '../emailForm/EmailForm'
import { RoughNotation } from 'react-rough-notation'
import VisibilitySensor  from 'react-visibility-sensor'

const Contact = ({refContact})=>{
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
                    <p><span>email: </span><a>sebastian.armata22@gmail.com</a></p>
                    <p><span>phone: </span><a>+48  726 873 385</a></p>
                    <p><span>LinkedIn: </span><a href="https://linkedin.com/in/sebastian-armata">linkedin.com/in/sebastian-armata</a></p>
                    <p><span>GitHub: </span><a href="https://github.com/SebastianArmata22">https://github.com/SebastianArmata22</a></p>

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