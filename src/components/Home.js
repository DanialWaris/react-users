import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Home.css';


function Home() {
    const { name, id } = useParams();
    let history = useHistory();
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
        history.push("/")
        getUsers();
    };
    return (
        <div>
            <div style={{textAlign: "center", fontFamily : "sans-serif", fontWeight : "bold", margin : "30px 0px"}}><h1>Welcome "{name}"</h1></div>
            <div style={{display :"flex", margin : "50px"}}>
                <h3>Your Profile: </h3>
            <Link to={`/edit/${id}`} className='btn edit mr-4 ml-4'>Edit</Link>
            <Link onClick={() => deleteUser(id)} className='btn delete'>Log Out</Link>
            </div>
            
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
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/view/${user.id}`} className='btn view'>View</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Home
