import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [user, setUser] = useState({
        name: "",
        username : "",
        email: "",
        password: ""
    });

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const checkValidation = async () => {
        if (user.name && user.username && user.email && user.password) {
            if (user.name.length >= 6 && user.username.length >= 4 && user.password.length >= 6 && user.email.indexOf("@") > -1 && user.email.indexOf(".") > -1) {
                await axios.post("http://localhost:3003/users", user)
                alert(`Now please click on "Log In" button!`)
            }
            else {
                if (!(user.name.length >= 6)) {
                    alert(`Name must have length of 6 or greater!`)
                }
                if (!(user.username.length >= 4)) {
                    alert(`Username must have length of 4 or greater!`)
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
            if (!(user.username)) {
                alert(`Please Fill the "Username" area!`)
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
    var button = document.querySelector("button");
        var inputs1 = document.querySelectorAll("input[type=text]");
        var inputs2 = document.querySelectorAll("input[type=email]");
        var inputs3 = document.querySelectorAll("input[type=password]");
        button.addEventListener("click", () => {
            inputs1.forEach((input) => {
                input.value = "";
            });
            inputs2.forEach((input) => {
                input.value = "";
            });
            inputs3.forEach((input) => {
                input.value = "";
            });
        });

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">SignUp</h2>
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
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your userame"
                            name="username"
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
                    <p>If you already have an account then <Link to={`/`}>Log In</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
