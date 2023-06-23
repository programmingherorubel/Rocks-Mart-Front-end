import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Subscribe.css'
import DashbordButton from '../Dashbord/DashbordButton';

const Subscribe = () => {
    return (
        <Container className='subscribe' fluid>
            <Row>
                <Col md={8} className='mx-auto text-center'>
                    <input placeholder='Enter Your Email' type="email" className='p-2 form-control subscribeinput' style={{background:'transparent'}} />
                    <textarea placeholder='Inter Your Message' rows={6} className='p-2 form-control subscribeinput mt-4' style={{background:'transparent'}}/>
                    <div>
                        <DashbordButton title='MESSEGE'></DashbordButton>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Subscribe;