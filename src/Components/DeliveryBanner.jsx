import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CiDeliveryTruck } from 'react-icons/ci'
import { GiReturnArrow } from 'react-icons/gi'
import { TbDiscount } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'

const DeliveryBanner = () => {
    const dlvrybnr = [
        {
            title: 'Free Delivery',
            extraTitle: 'Orders from all item',
            icon: 'CiDeliveryTruck'
        },
        {
            title: 'Return & Refund',
            extraTitle: 'Money back guarantee',
            icon: 'GiReturnArrow'
        },
        {
            title: 'Member Discount',
            extraTitle: 'Onevery order over $140.00',
            icon: 'TbDiscount'
        },
        {
            title: 'Support 24/7',
            extraTitle: 'Contact us 24 hours a day',
            icon: 'BiSupport'
        },
    ]
    return (
        <Container fluid className='mt-5 mb-5'>
            <Row>

                <Col lg={3} md={4} sm={6} className='col-12 mx-auto'>
                    <div style={{display:'flex',gap:'5px',padding:'10px',margin:'20px'}}>
                        <CiDeliveryTruck style={{ fontSize: '50px',color:'tomato' }} />
                        <div style={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
                            <h4 style={{fontWeight:'700',color:'#001E3C'}}>Orders from all item</h4>
                            <h6 style={{fontWeight:'700',color:'gray'}}>Orders from all item</h6>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='mx-auto'>
                    <div style={{display:'flex',gap:'5px',padding:'20px'}}>
                        <GiReturnArrow style={{ fontSize: '50px',color:'tomato' }} />
                        <div style={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
                            <h4 style={{fontWeight:'700',color:'#001E3C'}}>Return & Refund</h4>
                            <h6 style={{fontWeight:'700',color:'gray'}}>Money back guarantee</h6>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='mx-auto'>
                    <div style={{display:'flex',gap:'5px',padding:'20px'}}>
                        <TbDiscount style={{ fontSize: '50px',color:'tomato' }} />
                        <div style={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
                            <h4 style={{fontWeight:'700',color:'#001E3C'}}>Member Discount</h4>
                            <h6 style={{fontWeight:'700',color:'gray'}}>Onevery order over $140.00</h6>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='mx-auto'>
                    <div style={{display:'flex',gap:'5px',padding:'20px'}}>
                        <BiSupport style={{ fontSize: '50px',color:'tomato' }} />
                        <div style={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
                            <h4 style={{fontWeight:'700',color:'#001E3C'}}>Support 24/7</h4>
                            <h6 style={{fontWeight:'700',color:'gray'}}>Contact us 24 hours a day</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DeliveryBanner;