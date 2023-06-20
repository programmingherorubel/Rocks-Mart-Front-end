import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import '../Style/Banner.css'
import img1 from '../assets/slider (1).png'
import img2 from '../assets/slider (2).png'
import img3 from '../assets/slider (3).png'
import CustomButton from './CustomButton';

const Banner = () => {
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='banner'>
            <Container  fluid>
                <Slider {...settings}>
                    <Row className='banner-row d-flex align-items-center'>
                        <Col md={6} className='text-center'>
                            <h1>Discover the Best Deals: Shop, Save, and Sizzle!</h1>
                            <CustomButton title="Order Now"></CustomButton>
                        </Col>
                        <Col md={6} className='text-end'>
                            <img src={img1} alt="" />
                        </Col>
                    </Row>
                    <Row className='banner-row d-flex align-items-center'>
                        <Col md={6} className='justify-content-center'>
                            <h1>Limited Time Offer: Buy One, Get One Free</h1>
                            <CustomButton title="Order Now"></CustomButton>
                        </Col>
                        <Col md={6} className='justify-content-center'>
                            <img src={img2} alt="" />
                        </Col>
                    </Row>
                    <Row className='banner-row d-flex align-items-center'>
                        <Col md={6} className='justify-content-center'>
                            <h1>New Arrivals: Shop the Latest Trends Now</h1>
                            <CustomButton title="Order Now"></CustomButton>
                        </Col>
                        <Col md={6} className='justify-content-center'>
                            <img src={img3} alt="" />
                        </Col>
                    </Row>
                </Slider>
            </Container>
        </section>
    );
};

export default Banner;