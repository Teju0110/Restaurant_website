import React from 'react'
import about from '../Images/about.png'
import './About.css'

const About = () => {
  return (
    <div className='about' id="about">
        <div className='about_us'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button>Know More</button>
        </div>
        <div className='about_Img'>
            <img src={about} alt="About Image"/>
        </div>
        <div className='about_history'>
            <h1>Our History</h1>
            <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <button>Know More</button>
        </div>
    </div>
  )
}

export default About