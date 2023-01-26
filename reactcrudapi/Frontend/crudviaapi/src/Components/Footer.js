import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <>
      <Container >
        <Row className="main-Footer">
          <Col lg={4} md={4}>
            <h4>Minds Collide Pvt Lmt</h4>
            <ul className="unstyled">
              <li>341-123-000</li>
              <li>Moscow , Russia</li>
              <li>123 street North atlantica</li>
            </ul>
          </Col>
          {/* Coloumn one ended */}
          <Col lg={4} md={4}>
            <h4>Stuff</h4>
            <ul className="unstyled">
              <li>@mindscollide.info</li>
              <li>Good Stuff</li>
              <li>North atlantica</li>
            </ul>
          </Col>
          {/* coloumn 2 ended */}
          <Col lg={4} md={4}>
            <h4>Busniess Inquiries</h4>
            <ul className="unstyled">
              <li>341-123-000</li>
              <li>karachi , Pakistan</li>
              <li>mehran resisdency Gulshan</li>
            </ul>
          </Col>
          {/* coloumn 3 ended */}
        </Row>

        <br />

        
      </Container>
      <Container>
      <Row>
          <Col lg={12} md={12}>
            <p>
              &copy;{new Date().getFullYear()} Minds Collide Pvt.Lmt | All
              rights reserved | Term of services |privacy
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
