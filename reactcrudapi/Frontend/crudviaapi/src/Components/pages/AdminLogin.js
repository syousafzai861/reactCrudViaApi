import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  let login = () => {
    console.log("i am loged in");
    console.log(identifier);
    console.log(password);
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: identifier,
        password: password,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY3NDE5NjEwOSwiZXhwIjoxNjc2Nzg4MTA5fQ.AfA6HnMLDiiBtUV-IjAHdn3rkQMSrZGiXy22hAaevZQ",
          // "Content-Type": "application/json"
        },
      })
      .then((response) => {
        // Handle success.
        console.log(response);
        localStorage.setItem("token", response.jwt);
        Swal.fire("success", "Loged in Succesfully", "question");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        history("/create");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        Swal.fire("error", "Oops Some thing went wrong", "question");
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
            
          <h1>Admin Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="identifier"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                login();
              }}
            >
              LOGIN
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;
