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

    let Resetpass = () => {
        axios
            .post('http://localhost:1337/api/auth/change-password', {
                email: identifier, // user's email
                headers: {
                    "Authorization":"Bearer abd93751cc407416d7571f57b6bfd5416fb7da75e8335a241c008b09811d425337610887c5614c9d9727df7b6f059a096b1e35c07d56185c542ad29de70d5b0563694ad2716e6ba08be03f6fcb642897f2878651b61460d752dab25ba06d80f5cfa72939dc29b47ce8f2046a77e3c12023dfd8d85e5c6b7f91ff61cdf73d24e6",
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
                        <Button  className="btn-sm" variant="primary" type="button" onClick={() => { login() }}>
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
