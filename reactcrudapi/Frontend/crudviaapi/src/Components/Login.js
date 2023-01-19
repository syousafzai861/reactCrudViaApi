import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    let login = () =>{
        console.log("i am loged in")
    }
    return (
        <Container>

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Login Page</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="identifier" value={identifier} onChange={(e)=>{setIdentifier(e.target.value)}} placeholder="Enter email" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={()=>{login()}}>
                            LOGIN
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
