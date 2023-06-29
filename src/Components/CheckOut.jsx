
import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import BillingDetails from './BillingDetails';

const CheckOut = () => {
    const { products } = useSelector(state => state.products)
    const [bilingsForm,setBilingsForm]= useState(null)
    
console.log(bilingsForm)

    let quantity = 0;
    let discount = 0;
    let grandTotal = 0;
    let subtotal = 0;

    for (let product of products) {
        subtotal = product.price;
        quantity += product.quantity;
        discount += product.discount * product.quantity;
        grandTotal += subtotal * product.quantity;
    }

    grandTotal -= discount + 20;

    const stripePromise = loadStripe('pk_test_51NHjv5AvJdU5EBZNEGKyyFmxWI8rfGXEfsXJX2JsCrzs2ACfzvZ1YeisRonVfdg9ldVX8RRqB2O9drVIPLggBR9x0025cL6eWb');
    return (
        <Container style={{ background: '#EFF1F5' }} className='pt-5 pb-5' fluid>
            
            <Row>
            {bilingsForm &&  <Col md={6} className='mx-auto'>
                    <BillingDetails></BillingDetails>
                </Col>}
                <Col md={6} className='mx-auto'>
                    <div style={{ background: 'white' }} className='m-3 p-3'>
                        <h2>Your Order</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border-bottom'>
                            <p>Total Quantity</p> <b>{quantity}</b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border-bottom'>
                            <p>Subtotal</p> <b>${subtotal}</b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border-bottom'>
                            <p>Delivery charges</p> <b><span style={{ color: 'tomato' }}>+</span> $20</b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border-bottom'>
                            <p>Total Discount</p> <b><span style={{ color: 'tomato' }}>-</span> ${discount}</b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'tomato' }}><b>Total </b></p> <b style={{ color: 'tomato' }}>${grandTotal}</b>
                        </div>
                        <div className='p-5'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm products={products} setBilingsForm={setBilingsForm}  price={grandTotal} />
                            </Elements>
                        </div>
                    </div>
                </Col>

            </Row>
            
        </Container>
    );
};

export default CheckOut;
