import React from 'react'
import Navbar from './Navbar'
import './Home.css'
// import data from '../data.js'



function Home() {

  return (
    <div>
     <Navbar />
      <div className='cont-search'>
      <input type="text" placeholder='Search' />
      <button>Search</button>
      </div>
      <div>
        {/* {data.map((user,index) => (
          <Home key={index} photo={user.photo} productName={user.productName} price={user.price} />
            ))} */}
      </div>
    </div>
  )
}

export default Home
