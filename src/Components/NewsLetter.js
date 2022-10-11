import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <div className='newsLetter_container'>
            <h4>Newsletter</h4>
            <h1>Subscribe to Our Newsletter</h1>
            <p>And never miss latest Updates!</p>
            <div className='newLetter_input'>
                <input type='text' placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter