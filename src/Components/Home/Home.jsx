import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1>SM Pizzeria</h1>
        <p className="para">"Get ready to fall in love, one slice at a time! Our pizzas are so cheesy,they'll make your heart melt. 🍕❤️"</p>
        <Link to='/Menu'>
        <button id='btn' className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
          Order Now
        </button>
        </Link>
      </div>
    </div>
  
    )
}

export default Home