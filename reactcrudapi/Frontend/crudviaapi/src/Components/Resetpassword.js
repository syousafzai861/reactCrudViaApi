import React, { useState } from 'react'
import { Form, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';

function Resetpassword() {
    const [pcode, setPcode] = useState('');
    const [password, setPassword] = useState('');
    const [npassword, setNpassword] = useState('');
    let resetp = () => {
        axios
            .post('http://localhost:1337/api/auth/reset-password', {
                code: pcode, // code contained in the reset link of step 3.
                password: password,
                passwordConfirmation: npassword,
                   headers: {
                    "Authorization":"Bearer 2992f07e81576b67e4aa74bb8f2da2a71b1982bb0edd7e803dcceb33816c1d81c35355df994a13de4332429735c0589c0ae4175eeb0346c24f91e591d6172bd04d2fd36fd9687be61c13da7d6e880f0dc792a7f7f469b8b692d2b1d494f6d2b787859745317f99cdb6ffb398816afd900e9093514b60472ed72282a9238b9c12",
                    "Content-Type": "application/json"
               }
            })
            .then(response => {
                console.log(response)
                console.log("Your user's password has been reset.");
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Label htmlFor="inputPassword5">Private Code</Form.Label>
                    <Form.Control type="text" value={pcode} onChange={(e) => { setPcode(e.target.value) }} placeholder="Normal text" />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={npassword} onChange={(e) => { setNpassword(e.target.value) }}
                    />
                    <button className="btn btn-primary" onClick={() => resetp()}>Reset</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Resetpassword

