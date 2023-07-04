import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Footer.css'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
    const facebookColor = '#4267B2';
    const instagramColor = '#E4405F';
    const twitterColor = '#1DA1F2';
    const youtubeColor = '#FF0000';
    return (
        <Container className='footer' fluid >
            <Row>
                <Col md={4} lg={3} sm={6}>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
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
                <Col md={4} lg={3} sm={6}>
                    <h4 className='mt-4' style={{marginLeft:'30px'}}>Information</h4>
                    <ul >
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Over View</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Product promotion</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Wishlist Product</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Payment History</li>
                    </ul>
                </Col>
                <Col md={4} lg={3} sm={6}>
                    <h4 className='mt-4' style={{marginLeft:'30px'}}>Pages</h4>
                    <ul >
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>About Us</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Contact Us</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Your Order</li>
                        <li style={{listStyle:'none',marginTop:'5px',fontWeight:'600'}}>Order Product History</li>
                    </ul>
                </Col>
                <Col md={4} lg={3} sm={6}>
                    <h4 className='mt-4' style={{marginLeft:'30px'}} >Social Links</h4>
                    <ul style={{ display: 'flex',alignItems:'center' }}>
                        <li style={{ listStyle: 'none' }} className='mx-2'>
                            <CiFacebook style={{ color: facebookColor, fontSize: '22px' }} />
                        </li>
                        <li style={{ listStyle: 'none' }} className='mx-2'>
                            <BsInstagram style={{ color: instagramColor, fontSize: '22px' }} />
                        </li>
                        <li style={{ listStyle: 'none', fontSize: '22px' }} className='mx-2'>
                            <AiOutlineTwitter style={{ color: twitterColor, fontSize: '22px' }} />
                        </li>
                        <li style={{ listStyle: 'none' }} className='mx-2'>
                            <AiOutlineYoutube style={{ color: youtubeColor, fontSize: '22px' }} />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;