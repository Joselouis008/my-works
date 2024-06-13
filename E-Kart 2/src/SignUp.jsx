import React, { useState } from 'react'
import './Login-Signup.css'
import axios from 'axios';

function SignUp() {

  const [signupinput, setSignupinput] = useState({
    name: "",
    email: "",
    password: ""
    });

     const handleSubmit = (event) => {
      event.preventDefault();


      axios.post("http://localhost:3000/login",signupinput)
      .then(res => console.log(res))
      alert("signed")
      .catch(err => console.log(err));
      alert("error")

     };

  return (
    <div className='container'> 
    <form className='form' onSubmit={handleSubmit}>
    <div className='font'><h3>SignUp</h3></div>
      <div className='cont-main'> Name :- </div>
      <div className='cont-req'>
      <input type='text' placeholder='Enter Name Here' onChange={(e) => setSignupinput({...signupinput, name :e.target.value})} required /> 
      </div> 
      <div className='cont-main'> Email :- </div>
      <div className='cont-req'>
      <input type='text' placeholder='Enter Email Here' onChange={(e) => setSignupinput({...signupinput, email: e.target.value})} required /> 
      </div> 
      <div className='cont-main'>Password :- </div>
      <div className='cont-req'>
      <input type='text' placeholder='Enter Password Here'  onChange={(e) => setSignupinput({...signupinput, password: e.target.value})} required/> 
       </div>
       <div className='button'>
       <button type="submit">SignUp</button>
       </div>
       <div className='font-small'>
        If you have account already, <a href="/">Login</a>
       </div>

    </form>
      
     </div>
  )
}

export default SignUp
