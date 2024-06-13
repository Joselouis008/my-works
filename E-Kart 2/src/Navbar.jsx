import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='cont-navbar'>
      <div className='cont-logo'>
        Logo
      </div>
      <div className='cont-cart'>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/addtocart">Add to cart</a></li>
            <li><a href="/">Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

