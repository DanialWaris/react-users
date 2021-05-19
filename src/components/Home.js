import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        try {
            const Data = await axios.get(`http://localhost:3003/users`)
            setUsers(Data.data)
        } catch (error) {
            alert(`please wait! ${error}`)
        }
    }


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        getUsers();
    };
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index + 1}>
                            <th scope="row">{index}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn edit'>Edit</Link>
                                <Link to={`/view/${user.id}`} className='btn view'>View</Link>
                                <Link onClick={() => deleteUser(user.id)} className='btn delete'>Delete</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Home
