import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
    var history = useHistory()
    const [data, setData] = useState([])
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });

    const onEmailChange = e => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };
    const onPasswordChange = e => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        try {
            const Data = await axios.get(`http://localhost:3003/users`)
            setData(Data.data)
        } catch (error) {
            alert(`please wait! ${error}`)
        }
    }

    const checkEmail = () => {
        
        const hasEmailMatch = data.some(d => loginUser.email === d.email);
        const hasPasswordMatch = data.some(d => loginUser.password === d.password);
        if (hasEmailMatch && hasPasswordMatch) {
            const myUser = data.filter(d => loginUser.email === d.email)
            history.push(`/home/${myUser[0].name}/${myUser[0].id}`)
        }
        else {
            return (alert(`Invalid Data! User does not exist!`))
            history.push('/')
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        checkEmail()
        localStorage.clear();

    };



    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            onChange={e => onEmailChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your password"
                            name="password"
                            onChange={e => onPasswordChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Login</button>
                    <p>If not already have an account then please first <Link to='/signUp'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login




