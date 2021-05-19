import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const checkValidation = async () => {
        if (user.name && user.email && user.password) {
            if (user.name.length >= 6 && user.password.length >= 6 && user.email.indexOf("@") > -1 && user.email.indexOf(".") > -1) {
                await axios.post("http://localhost:3003/users", user)
            }
            else {
                if (!(user.name.length >= 6)) {
                    alert(`Name must have length of 6 or greater!`)
                }
                if (!(user.password.length >= 6)) {
                    alert(`Password must have length of 6 or greater!`)
                }
                if (!(user.email.indexOf("@") > -1 && user.email.indexOf(".") > -1)) {
                    alert(`Invalid Email! Please enter the valid email!`)
                }
            }
        }
        else {
            if (!(user.name)) {
                alert(`Please Fill the "Name" area!`)
            }
            if (!(user.email)) {
                alert(`Please Fill the "Email" area!`)
            } if (!(user.password)) {
                alert(`Please Fill the "Password" area!`)
            }
        }
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        checkValidation()
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={e => onSubmitForm(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email Address"
                            name="email"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your password"
                            name="password"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Register</button>
                    <p>If you already have an account then <Link to='/'>Log In</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
