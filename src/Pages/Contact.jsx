import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Subscribe from '../Components/Subscribe';
import DashbordButton from '../Dashbord/DashbordButton';
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Contact = () => {
     // Define the colors
  const facebookColor = '#4267B2';
  const instagramColor = '#E4405F';
  const twitterColor = '#1DA1F2';
  const youtubeColor = '#FF0000';
    return (
        <Container>
            <Row> <h1 className='text-center mt-5'>Contact Us</h1>
                <Col md={6}>
                    <p style={{ color: 'gray' }}><CiLocationOn style={{ fontSize: '22px' }} /><b className='mx-2'>Address:</b></p>
                    <p style={{ color: 'gray' }}>Dhaka bangladesh Gulshan1 </p>
                    <p style={{ color: 'gray' }}><HiOutlineMail style={{ fontSize: '22px' }} /><b className='mx-2'>Email:</b></p>
                    <p style={{ color: 'gray' }}>mdrubel007@hotmail.com </p>
                    <p style={{ color: 'gray' }}><HiOutlineMail style={{ fontSize: '22px' }} /><b className='mx-2'>Phone:</b></p>
                    <p style={{ color: 'gray' }}>+880 1907626245 </p>
                    <p style={{ color: 'gray' }}><HiOutlineMail style={{ fontSize: '22px' }} /><b className='mx-2'>SOCIALS:</b></p>
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
                <Col md={6}>
                    <input placeholder='Enter Your Full Name' type="text" className='p-2 mt-3 form-control ' />

                    <input placeholder='Enter Your Email' type="email" className='p-2 mt-3 form-control ' />

                    <textarea placeholder='Inter Your Message' rows={6} className='p-2 form-control  mt-4' />
                    <div>
                        <DashbordButton title='Contact Us'></DashbordButton>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;