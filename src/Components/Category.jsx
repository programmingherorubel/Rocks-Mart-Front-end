import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Category.css';
import { useGetCategoryQuery } from '../app/featchers/api/apiSlice';
import Error from './Error';
import Loading from './Loading';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Category = () => {
    const { isError, isLoading, data } = useGetCategoryQuery();
   
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

    if (!isLoading && !isError && data.length > 0) {
        content = data.map((category, index) => (
            <Col className=' p-3  border' style={{ height: '300px', margin: '0 auto', textAlign: 'center' }}lg={3} md={4} sm={6} key={index}>
                <Link style={{ textDecoration: 'none' }} to={`/category/${category.category}`}>
                    <div className='mx-auto'>
                        <img src={category.img} className='img-fluid' style={{ height: '220px' }} alt='' />
                        <h5 style={{color:'rgb(6, 6, 61)',fontWeight:'700'}} className='text-center'>{category.category.toUpperCase()}</h5>
                    </div>
                </Link>
            </Col>
        ));
    }


    return (
        <section className='category'>
            <Container >
                <Row className='mt-5 '>{content}</Row>
            </Container>
        </section>
    );
};

export default Category;
