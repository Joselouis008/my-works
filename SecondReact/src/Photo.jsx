import React from 'react'
import NavPage from './NavPage'
import './Photo.css'
import dash from './assets/dash.jpg'

function Photo() {
  return (
    <div>
      <NavPage />
      <div><img src={dash} alt="Dash" className='img1' /></div>
    </div>
  )
}

export default Photo
