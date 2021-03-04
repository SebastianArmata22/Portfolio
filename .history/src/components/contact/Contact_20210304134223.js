import classes from './contact.module.scss'
import React, { useState } from 'react'
import EmailForm from '../emailForm/EmailForm'
import { RoughNotation } from 'react-rough-notation'
import VisibilitySensor  from 'react-visibility-sensor'

const Contact = ()=>{
    const [Visible,setVisible]=useState(false)
    const onChange=(isVisible)=>{
        isVisible && setVisible(true)
    }
    return(
        <div className={classes.contact}>
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
                    <p><span>email: </span>sebastian.armata22@gmail.com</p>
                    <p><span>phone: </span>+48  726 873 385</p>
                    <p><span>LinkedIn: </span>linkedin.com/in/sebastian-armata</p>
                    <p><span>GitHub: </span>https://github.com/SebastianArmata22</p>

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