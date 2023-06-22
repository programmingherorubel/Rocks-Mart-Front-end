import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Error from './Error';
import Loading from './Loading';
import { useGetProductQuery } from '../app/featchers/api/apiSlice';
import Product from './Product';
import '../Style/RecentAndDiscount.css'

const RecentAndDiscount = () => {
    const [tabData,setTabData]= useState('watter-Bottol')
    const {isLoading,isError,data}=useGetProductQuery()
    console.log(tabData)
    let content = null

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <Error error='There was an error' />;
    }

    if (!isLoading && !isError && data.length === 0) {
        content = <Error error='No Data Found' />;
    }

    const watter = data?.filter(item => item.category === 'watter-Bottol')
    const bag = data?.filter(item => item.category === 'Bag')
    const laptopsticker = data?.filter(item => item.category === 'Laptop-Sticker')
    const mobilecover = data?.filter(item => item.category === 'Mobile-Cover')
   
    return (
        <Container fluid>
            <Row>
            <div className='text-center'>
                <h3 style={{fontWeight:'700',margin:'20px 0px'}}>Recent Products</h3>
                <button onClick={()=>setTabData('watter-Bottol')} className='mx-2 mt-2 styleButton'>Watter Bottle</button>
                <button onClick={()=>setTabData('Bag')} className='mx-2 mt-2 styleButton'>Bag</button>
                <button onClick={()=>setTabData('Laptop-Sticker')} className='mx-2 mt-2 styleButton'>Laptop-Sticker</button>
                <button onClick={()=>setTabData('Mobile-Cover')} className='mx-2 mt-2 styleButton'>Mobile-Cover</button>
            </div>
                {tabData === 'watter-Bottol' && watter?.slice(0,8).reverse().map((item)=> <Product product={item}></Product>)}
                {tabData === 'Bag' && bag?.slice(0,8).reverse().map((item)=> <Product product={item}></Product>)}
                {tabData === 'Laptop-Sticker' && laptopsticker?.slice(0,8).reverse().map((item)=> <Product product={item}></Product>)}
                {tabData === 'Mobile-Cover' && mobilecover?.slice(0,8).reverse().map((item)=> <Product product={item}></Product>)}
            </Row>
        </Container>
    );
};

export default RecentAndDiscount;