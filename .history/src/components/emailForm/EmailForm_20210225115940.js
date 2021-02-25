import React from 'react'
import emailjs from 'emailjs-com';

const EmailForm=()=>{

    const sendEmail=(e)=>{
        e.preventDefault();

    emailjs.sendForm('service_uq2c8e8', 'template_7bcltq8', e.target, 'user_KBwBVW5CfE4pABZBdHEsH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
    <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
    )
}
export default EmailForm