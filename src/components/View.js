import React, { useState, useEffect } from 'react';
import './Edit.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
    const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data)
  }

    return (
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View User Details</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
            />
          </div>
          <Link to={'/home'} className="btn btn-warning btn-block">Back</Link>
        </form>
      </div>
    </div>
    )
}

export default View
