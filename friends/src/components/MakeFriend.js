import React, { useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner'
import { Form, Button } from 'react-bootstrap';

 const MakeFriend =props => {
     const [newFriend, setNewFriend] = useState({
         name: '',
         age: Number,
         email: ''
     })

     const [isAdding, setIsAdding] = useState(false);

     const handleChange = e => {
         setNewFriend({
             ...newFriend,
             [e.target.name]: e.target.value
         })
     }

     const handleSubmit = e => {
         e.preventDefault();
         setIsAdding(true)

         axiosWithAuth()
         .post('friends', newFriend)
         .then(res => {
             console.log(res);
             setNewFriend({
                 name: '',
                 age: '',
                 email: ''
             })
             setIsAdding(false)
             props.setIsFetching(props.isFetching)
             props.history.push('/FriendsList')
             
         })
         .catch(err => {
             console.log('Failed to make a new friend', err);
         });
     };
    return (
        <div style={{width: '95vw',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Made a new friend? How about you add them to your friends list!</h2>
            <Form onSubmit={handleSubmit} style={{width: '25vw', flexDirection: 'column', border: '2px solid #000', padding: '25px', boxShadow: '5px 8px 7px #778899', margin: '2%'}}>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type='name'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='formBasicAge'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                    type='age'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type='email'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                {isAdding &&
                    <Loader
                    type='Puff'
                    color='#000'
                    height={100}
                    width={100}
                    />
                }
                <Button variant='primary' type='submit'>Make a new friend</Button>
            </Form>
        </div>
    )
}

export default MakeFriend;