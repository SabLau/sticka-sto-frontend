import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import "./css/AdminLogin.css";
import { useDispatch } from 'react-redux';
import { isLogged, isAdmin } from '../actions/index.js';
import { Redirect } from 'react-router';

const BACKEND_SERVER = 'http://127.0.0.1:5000/';


export default function AdminLogin() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [invalidLogin, setInvalidLogin] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        let userLogin = {
        "email": email,
        "password": password
        };
        axios.post(BACKEND_SERVER + 'admin_auth',
        userLogin)
        .then((result)=>
        {
            if(result.data.result){
                dispatch(
                    isLogged(
                        result.data.id, 
                        result.data.name, 
                        result.data.email
                        )
                    );
                if(result.data.isAdmin){
                    dispatch(isAdmin());
                }
                //redirect user
                setRedirect(true);
            }
            else{
                //set variable to show login error
                setInvalidLogin(true);
            }
            console.log(result)});

    }

    if(redirect){
        return <Redirect to="/" />
    }
    return (
        <div className="AdminLogin">
        <form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            {
                invalidLogin ? 
                    <p class="invalidLogin">Invalid Login Information</p>
                : null
            }
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
            </Button>
        </form>
        </div>
    );
}
