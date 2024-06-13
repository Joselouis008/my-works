import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Create.css';
import NavPage from './NavPage';

function Create() {
    const [values, setValues] = useState({
        id: '0',
        title: '',
        date: '',
        priority: 'Low',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };
    
   const today = new Date().toISOString().split('T')[0];

    const handleDateChange = (event) => {
        const formattedDate = formatDate(event.target.value);
        setValues({ ...values, date: formattedDate });
    };

    const validateForm = () => {
        const errors = {};
        if (!values.id) errors.id = 'ID is required';
        if (!values.title) errors.title = 'Title is required';
        if (!values.date) errors.date = 'Date is required';
        if (!values.description) errors.description = 'Description is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:3002/users', values)
                .then(res => {
                    console.log(res);

                    navigate('/home');
                })
                .catch(err => console.log(err));
        }
    };

    return (
      <div>
        <NavPage />
        <div className='container'>
          <div className='contianer-i'>
                <h1>Add Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className='bottom'>
                        <label htmlFor="id">ID:</label>
                        <input type="number" name='id' className='form-control' placeholder='Enter Number'
                            onChange={e => setValues({ ...values, id: e.target.value })} />
                        {errors.id && <span>{errors.id}</span>}
                    </div>
                    <div className='bottom'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' className='form-control' placeholder='Enter Title'
                            onChange={e => setValues({ ...values, title: e.target.value })} />
                        {errors.title && <span>{errors.title}</span>}
                    </div>
                    <div className='bottom'>
                        <label htmlFor="date">Date:</label>
                        <input type="date" name='date' className='form-control' placeholder='Enter Date'
                            onChange={handleDateChange} max={today} dateFormat="dd/mm/yyyy" />
                        {errors.date && <span>{errors.date}</span>}
                    </div>

                    <div className='bottom'>
                        <label htmlFor="priority">Priority:</label>
                        <select name="priority" className='form-control'
                            onChange={e => setValues({ ...values, priority: e.target.value })}>
                            <option value="Low">Low</option>
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className='bottom'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' className='form-control' placeholder='Enter Description'
                            onChange={e => setValues({ ...values, description: e.target.value })} />
                        {errors.description && <span>{errors.description}</span>}
                    </div>
                    <button className='success'>Submit</button>
                    <Link to="/photo" className='primary'>Back</Link>
                </form>
            </div>
        </div>
      </div>
    );
}

export default Create;
