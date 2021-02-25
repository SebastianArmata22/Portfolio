import classes from './emailForm.module.scss'
import React from 'react'
import emailjs from 'emailjs-com'

const EmailForm=()=>{

    const sendEmail=(e)=>{
        e.preventDefault();

    emailjs.sendForm('service_cqphpw4', 'template_7bcltq8', e.target, 'user_KBwBVW5CfE4pABZBdHEsH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
    <form className={classes.email_form} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button classes={classes.send_btn} type="submit" value="Send"></button>
    </form>
    )
}
export default EmailForm