import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { AdminTable } from '../components/AdminTable';

export const Admin = () => {
    const [authed, setAuthed] = useState(false);
    const [creds, setCreds] = useState({});
    const [key, setKey] = useState({});

    const emailRef = useRef();
    const passRef = useRef();

    function fetchAuth(email, pass) {
        axios.get('http://localhost:5000/auth?email='+email+'&pass='+pass)
            .then(res => {
                if(res.data.results.validated === 'true'){
                    console.log(res.data.results)
                    setCreds(res.data.results);
                    setAuthed(true);
                }
        })
    }

    const handleSubmit = event => {
        setKey({'email':emailRef.current.value,'pass':passRef.current.value})
        fetchAuth(emailRef.current.value, passRef.current.value);
    };

    const but = {
        float: 'right',
        padding:'15px'
    }

    return (
        <Container>
            {authed ?
                <div>
                    <AdminTable creds={key} rePost={setCreds} posts={creds.posts} authors={creds.authors} />
                </div>
                :
                <div>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={but} variant="outline-info" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            }
        </Container>
    );
}