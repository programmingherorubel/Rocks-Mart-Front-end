import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import '../Style/Review.css'
import { useReviewQuery } from '../app/featchers/api/apiSlice';
import Loading from './Loading';
import Error from './Error';

const Review = () => {
    const {isLoading,data,isError}=useReviewQuery()
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <Error error='There was an error' />;
    }

    if (!isLoading && !isError && data.length === 0) {
        content = <Error error='No Data Found' />;
    }
    
    if(!isLoading && !isError && data.length >0 ){
        content = data.map((item,index)=> <div key={index} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='text-center reviewinfo mx-auto'><img className='reviewImg' src={item.img}  alt="" /></div>
        <p style={{color:'gray'}}>{item.review}</p>
        <h6 style={{color:'#BE153C'}}><i>{item.name}</i></h6>
    </div>)
    }
   

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
                        {content}
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;