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
                history("/read");


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
                        <Button variant="primary" type="button" onClick={() => { login() }}>
                            LOGIN
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
