import React, { useState } from 'react'
import './Login-Signup.css'
import axios from 'axios';

function Login() {

  const[logininput, setLogininput] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async(event) => {
    event.preventDefault();
    // console.log(logininput.email)
    // console.log(logininput.password)
     
    try{
      // alert("entered")      
      const res = await axios.get("http://localhost:3004/login", 
      {
      params: {
      email: logininput.email,
      password: logininput.password
      }
      }
);

      const user = res.data;

      if (user) {
        alert('success');
      } else {
        alert('failed');
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    
    <div className='container'> 
    <div className='form'>
      <div className='font'><h3>Login</h3></div>
      <div className='cont-main'> Email :- </div>
      <div className='cont-req'>
      <input type='text' placeholder='Enter Email Here' value={logininput.email} onChange={(e) => setLogininput({...logininput,email: e.target.value})} required /> 
      </div> 
      <div className='cont-main'>Password :- </div>
      <div className='cont-req'>
      <input type='password' placeholder='Enter Password Here' value={logininput.password} onChange={(e) => setLogininput({...logininput,password: e.target.value})} required /> 
       </div>
       <div className='button'>
       <button type='submit' onClick={handleSubmit}>Login</button>
       </div>
       <div className='font-small'>
        If you don't have account <a href="/signup">Sign up</a>
       </div>
       </div>
     </div>
  )
}

export default Login
