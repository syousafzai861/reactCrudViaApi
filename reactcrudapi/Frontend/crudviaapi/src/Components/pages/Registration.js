import React, { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    let register = () => {
        // console.log("i am register")
        // console.log(name)
        // console.log(email)
        // console.log(password)
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username: name,
                email: email,
                password: password,
                headers: {
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjc0MTI4MTQ0LCJleHAiOjE2NzY3MjAxNDR9.v9uUnCzcxnyraYEN8bkZs1uYBQX4a4FmoidLxuDhLwY",
                   // "Content-Type": "application/json"
               }
            })
            .then(response => {
                // Handle success.
                console.log(response)
                Swal.fire(
                    'SUCCESSFULLY REGISTERED',
                    'WELCOME',
                )
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                Swal.fire(
                    'Oops',
                    'Something Went Wrong'

                )
                console.log('An error occurred:', error.response);
            });
            history("/login")
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Registration Page</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your UserName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={() => register()}>
                            REGISTER
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Registration;
