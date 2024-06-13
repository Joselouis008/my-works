import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!values.name || !values.email || !values.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        // Validation for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validation for phone number format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(values.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        axios.post('http://localhost:3001/users', values)
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name'
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email' className='form-control' placeholder='Enter Email'
                            onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name='phone' className='form-control' placeholder='Enter Phone Number'
                            onChange={e => setValues({ ...values, phone: e.target.value })} />
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
