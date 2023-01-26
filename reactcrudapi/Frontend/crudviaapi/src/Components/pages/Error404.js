import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Error404() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div>
                        <h1>ERROR PAGE NOT FOUND</h1>
                    </div></Col>
            </Row>
        </Container>

    )
}

export default Error404
