import classes from './contact.module.scss'
import React from 'react'
import EmailForm from '../emailForm/EmailForm'

const Contact = ()=>{
    return(
        <div className={classes.contact}>
        <header>
            <p>&lt;Contact</p>
        </header>
        <main>
            <div>
                <div className={classes.contact_info}>
                    <p><span>email: </span>sebastian.armata22@gmail.com</p>
                    <p><span>phone: </span>+48  726 873 385</p>
                    <p><span>LinkedIn: </span>linkedin.com/in/sebastian-armata-605466207</p>
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