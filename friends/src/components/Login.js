import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import  { Form, Button }  from 'react-bootstrap'

export const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        console.log(credentials)
        setCredentials({ 
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            
            setCredentials({
                name: '',
                password: ''
            })
            props.history.push('/FriendsList')
        })
        .catch(err => {
            localStorage.removeItem('token');
            console.log('invalid login', err);
            alert('Invalid username or password');
        })
    }

    return (
        <div style={{width: '100%', height:'75vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Form onSubmit={login} style={{width: '25vw', flexDirection: 'column', border: '2px solid #000', padding: '25px', boxShadow: '5px 8px 7px #778899'}}>
                <Form.Group controlId='formBasicUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type='username'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange} 
                    />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange} 
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm;