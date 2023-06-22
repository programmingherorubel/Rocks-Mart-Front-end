import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import img1 from '../assets/review1.jpg'
import img2 from '../assets/review2.jpg'
import img3 from '../assets/review3.jpg'
import '../Style/Review.css'

const Review = () => {
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
        <Container className='review' fluid>
            <Row>
                <Col md={8} className='mx-auto text-center'>
                    <Slider {...settings}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div className='text-center reviewinfo mx-auto'><img className='reviewImg' src={img1}  alt="" /></div>
                            <h3>"The Fitbit Versa 3 is an excellent fitness companion. It accurately tracks my steps, heart rate, and sleep patterns, providing valuable insights for my health and fitness goals."</h3>
                            <h6 style={{color:'tomato'}}><i>Jessica</i></h6>
                        </div>


                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div className='text-center reviewinfo mx-auto'><img className='reviewImg' src={img2}  alt="" /></div>
                            <h3>"The display is bright and easy to read, even in direct sunlight. I love the variety of watch faces and the ability to customize them to match my style"</h3>
                            <h6 style={{color:'tomato'}}><i>Jessica</i></h6>
                        </div>


                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div className='text-center reviewinfo mx-auto'><img className='reviewImg' src={img3}  alt="" /></div>
                            <h3>"The built-in GPS is a fantastic feature for outdoor activities like running or cycling. I can leave my phone behind and still track my distance and route accurately."</h3>
                            <h6 style={{color:'tomato'}}><i>Jessica</i></h6>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;