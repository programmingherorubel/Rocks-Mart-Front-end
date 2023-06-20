import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetAllProductsQuery } from '../app/featchers/api/apiSlice';
import Error from './Error';
import FilterSection from './FilterSection';
import Loading from './Loading';
import Product from './Product';



const Shop = () => {
    const [filtercategory,setFilterCategory]= useState('all')
    const {isLoading,isError,data}=useGetAllProductsQuery(filtercategory)
    const categorySelect = event =>{
        setFilterCategory(event.target.value)
    }
    console.log(filtercategory)
    
    let content = null 

    if(isLoading){
        return <Loading/>
    }
    if(!isLoading && isError){
        content = <Error error='Thare was an Error' />
    }

    if(!isLoading && !isError && data?.length === 0){
        content = <Error error='No Data Found' />
    }

    if(!isLoading && !isError && data?.length > 0){
        content = data.map((product,index) => <Product  key={index} product={product} />)
    }

    

    return (
        <Container fluid>
            <Row>
                <Col md={2} className='px-3 border-end mt-2 mb-2' style={{height:'auto'}}>
                    <FilterSection categorySelect={categorySelect} />
                </Col>
                <Col md={10}>
                    <Row>
                        {content}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;