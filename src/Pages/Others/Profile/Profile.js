import React, { useContext, useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext);
    const [name,setName]=useState(user.displayName);
    const photoURLRef=useRef(user.photoURL);


    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const handlechenge=(event)=>{
        setName(event.target.value);
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" readOnly defaultValue={user?.email} placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={handlechenge} defaultValue={name} readOnly type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} readOnly type="text" placeholder="PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Profile;