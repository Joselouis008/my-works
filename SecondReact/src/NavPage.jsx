import React from 'react'
import { Link } from 'react-router-dom'
import './NavPage.css'
// import dash from './assets/dash.jpg'

function NavPage() {
  return (
    <div>
      <nav>
        <ul>
            <li>
               <Link to="/photo">Home</Link>
            </li>
            <li>
                <Link to="/home">Get All Task</Link>
            </li>
            <li>
                <Link to="/create">Add Task</Link>
            </li>
            <li className='edge'>
            <Link to="/">LogOut</Link>
            </li>
        </ul>
      </nav>
      {/* <img src={dash} alt="Dash" className='img1' /> */}
    </div>
  )
}

export default NavPage
