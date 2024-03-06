import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p><img src="/src/components/png/placeholder.png" alt="" />Phayao, Mae Ka</p>
                <p><img src="/src/components/png/phone-call.png" alt="" /> 080 000 0000</p>
                <p><img src="/src/components/png/mail.png" alt="" /> kayasitkaanma@gmail.com</p>
                
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email"/>
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact