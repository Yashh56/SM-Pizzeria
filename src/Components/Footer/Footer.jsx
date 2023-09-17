import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div></div>
        <p className='items'>About Us</p>
        <Link to="https://github.com/Yashh56"><p className='items'>GitHub</p>
        </Link>
        <p className='items'>Contact Us</p>
        <p className='items'>Stores</p>
        <p className='items'>Jobs</p>
        <p className='items'>Online</p>
        <p className='items'>Download</p>
        

      </div>
    </div>
  )
}

export default Footer