import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(errors).length === 0) {
        
            if (values.email === 'jose@gmail.com' && values.password === 'password') {
                navigate("/photo");
            } else {
                errors.invalidCredentials = 'Invalid email or password';
                setErrors(errors);
            }
        } else {
            setErrors(errors);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    return (
        <div className='container-login'>
            <div className='container-i-login'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='bottom'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name='email' 
                            className='form-control' 
                            placeholder='Enter Email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className='bottom'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name='password' 
                            className='form-control' 
                            placeholder='Enter Password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    {errors.invalidCredentials && <div className="error">{errors.invalidCredentials}</div>}
                    <button className='success-login center-login'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

