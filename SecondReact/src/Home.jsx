import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import NavPage from './NavPage';

function Home() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3002/users')
            .then(res => {
                setData(res.data);
                setFilteredData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filtered = data.filter(d =>
            d.priority.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
          <NavPage/>
          <div className='cont'>
          <select
                className='search-dropdown'
                value={searchTerm}
                onChange={handleSearchChange}
            >
                <option value="">All Priorities</option>
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
            </select>
          </div>
          <div className='cont'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.date}</td>
                            <td>{d.priority}</td>
                            <td>{d.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Home;
