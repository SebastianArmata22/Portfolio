import classes from './contact.module.scss'
import React from 'react'
import EmailForm from '../emailForm/EmailForm'

const Contact = ()=>{
    return(
        <div className={classes.contact}>
        <header>
            <p>Contact</p>
        </header>
        <main>
            <div>
                <p><span>email: </span>sebastian.armata22@gmail.com</p>
                <p><span>phone: </span>+48  726 873 385</p>
            </div>
            <div>
                <EmailForm />
            </div>
        </main>
    </div>
    )
}
export default Contact