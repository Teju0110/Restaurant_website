import React from 'react'
import './Contact.css'
import contact from '../Images/contact.png'

const Contact = () => {
  return (
    <div className='contact' id="contact">
        <div className='contact_content'>
            <h4>Contact</h4>
            <h1>Find Us</h1>
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 10:00 am - 02:00 am <br/>Sat - Sun: 10:00 am - 03:00 am</p>
            <button>Visit Us</button>
        </div>
        <div className='contact_image'>
            <img src={contact} alt="contact image"/>
        </div>
    </div>
  )
}

export default Contact