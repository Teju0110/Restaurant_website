import React from 'react'
import chef from '../Images/chef.png'
import signature from '../Images/signature.png'
import './Chef.css'

const Chef = () => {
  return (
    <div className='chef'>
        <div className='chef_Image'>
            <div className='Image_div1'/>
            <div className='chef_Img'>
                <div className='Image_div2'/>
                <img src={chef} alt="chef Image"/>
                <div className='Image_div3'/>
            </div>
            <div className='Image_div4'/>
        </div>
        <div className='chef_content'>
            <h5>Chef’s Word</h5>
            <h1>What we believe in</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .<br/>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            <h2>Kevin Luo</h2>
            <h3>Chef & Founder</h3>
            <img src={signature} alt="signature"/>
        </div>
    </div>
  )
}

export default Chef