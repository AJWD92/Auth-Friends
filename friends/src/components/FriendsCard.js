import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const FriendsCard = (props) => {
    const { id, name, age, email } = props.friend;
    return (
        <div style={{width: '95%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card className='friendCard' style={{width: '35vw', display: 'flex', margin: '2%', flexDirection: 'column'}}>
                <Card.Header>Name: {name}</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroup.Item>Id: {id}</ListGroup.Item>
                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                </ListGroup>
                <Button variant='dark' style={{margin: '2% auto', width: '25%'}}>Edit</Button>
                <Button variant='danger' style={{margin: '2% auto', width: '25%'}}>Delete</Button>
            </Card>
        </div>
    )
}

export default FriendsCard