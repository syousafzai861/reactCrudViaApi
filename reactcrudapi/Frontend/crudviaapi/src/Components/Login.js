import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    let login = () => {
        console.log("i am loged in")
        console.log(identifier);
        console.log(password);
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: identifier,
                password: password,
            })
            .then(response => {
                // Handle success.

                localStorage.setItem('token', response.jwt)
                Swal.fire(
                    'success',
                    'Loged in Succesfully',
                    'question'
                )
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                history("/readuser");


            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                Swal.fire(
                    'error',
                    'Oops Some thing went wrong',
                    'question'
                )
            });


    }

    let Resetpass = () => {
        axios
            .post('http://localhost:1337/api/auth/forgot-password', {


                email: identifier, // user's email

                headers: {
                    "Authorization": "Bearer 9570a258181bb5bf364f3bf1409bea85796dc4fe0d79dbfd031c1a5bde37b751a059a5151e2991b9eca490a79105d3ae8b279e10211c22bd13fa07ade6aaff107e5d2a7279902d0b4a8cda8e8356767b066af28eab1ab5ff7dcfbbec71194d314f664b8c80560d073b93e45c92ac7591dcdbd27c9c00ccb957d2583e1c02200b",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                console.log(response)
                console.log('Your user received an email');
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }
    return (
        <Container>

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Login Page</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="identifier" value={identifier} onChange={(e) => { setIdentifier(e.target.value) }} placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="btn-sm" variant="primary" type="button" onClick={() => { login() }}>
                            LOGIN
                        </Button>
                        <Button className="btn-sm" variant="primary" type="button" onClick={() => { Resetpass() }}>
                            Reset password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
