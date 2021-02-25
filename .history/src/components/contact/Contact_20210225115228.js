import classes from './contact.module.scss'
import React from 'react'
import EmailForm from '../emailForm/EmailForm'

const Contact = ()=>{
    return(
        <div className={classes.contact}>
        <header>
            <p>Contact</p>
            <div>

            </div>
            <div>
                <EmailForm />
            </div>
        </header>
    </div>
    )
}
export default Contact