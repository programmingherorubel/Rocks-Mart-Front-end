import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Footer.css'

const Footer = () => {
    return (
        <Container className='footer' fluid >
            <Row>
                <Col md={4}>
                <div style={{display:'flex',justifyContent:'start'}}>
              <h1 style={{ fontWeight: '700' }}>
                Rocks
                <span style={{ color: 'tomato' }}>Mart</span>
                <span style={{ fontSize: '30px' }}>.</span>
              </h1>
            </div>
            <h5><b>Address: Dhaka Bangladesh Gulshan</b></h5>
            <b>+880 1907626245</b> <br />
            <b>+880 1689365200</b>

                </Col>
            </Row>
        </Container>
    );
};

export default Footer;