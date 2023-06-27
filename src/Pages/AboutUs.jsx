import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../assets/c.png'
import { Link } from 'react-router-dom';
import Review from '../Components/Review';

const AboutUs = () => {
    
    return (
        <>
        <Container fluid style={{background:'#FFFCF2'}}>
            <Row className='pt-5 pb-5' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Col md={5}>
                    <h1>Don't miss out <br /> on special offers</h1>
                    <Link to='/shop' style={{color:'white'}}> <button className='dashbordButton'>Go Shop</button></Link>
                </Col>
                <Col md={7}>
                    <img src={aboutimg} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={4}>
                    <h1 style={{color:'#FF6347'}}>10 million</h1>
                    <p style={{color:'gray'}}>Articles have been public around the world (as of Sept. 30, 2021)</p>
                </Col>
                <Col md={4}>
                <h1 style={{color:'#FF6347'}}>100,000</h1>
                    <p style={{color:'gray'}}>Registered users account (as of Sept. 30, 2021)</p>
                </Col>
                <Col md={4}>
                <h1 style={{color:'#FF6347'}}>220+</h1>
                    <p style={{color:'gray'}}>Countries and regions have our presence (as of Sept. 30, 2021)</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className='mt-5 mb-5'>
            <Row>
                <Review></Review>
            </Row>
        </Container>
    </>
    );
};

export default AboutUs;