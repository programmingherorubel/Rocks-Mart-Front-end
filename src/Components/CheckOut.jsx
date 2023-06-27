import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const { products } = useSelector(state => state.products)
    

    let subtotal = 0
    let quantity = 0;
    let discount = 0;
    let grandTotal = 0;

    for (let product of products) {
        quantity += product.quantity 
        subtotal +=product.price * quantity
        discount += product.discount * quantity
        grandTotal =subtotal + 20 - discount
    }

    console.log(subtotal)
    console.log(quantity)
    console.log(discount)
    console.log(grandTotal)

    return (
        <Container style={{background:'#EFF1F5'}} className='pt-5 pb-5' fluid>
            <form>
            <Row>
                <Col md={6} >
                    <div style={{background:'white'}} className='m-3 p-3'>
                        <h2>Billing Details</h2>
                        
                            <div style={{display:'flex',gap:'5px'}}>
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='FirstName' />
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='LastName' />
                            </div>
                            <div style={{display:'flex',gap:'5px'}}>
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='Country' />
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='Town/City' />
                            </div>
                            <div style={{display:'flex',gap:'5px'}}>
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='Postcode ZIP' />
                                <input type="text"className='rounded-0 form-control mt-3 p-2'placeholder='Mobile Number' />
                            </div>
                                <input type="email"className='rounded-0 form-control mt-3 p-2'placeholder='Input Your Email' />
                                <textarea rows={6} type="text"className='rounded-0 form-control mt-4 p-3'placeholder='Input Your Email' />
                        
                    </div>
                </Col>
                <Col md={6}>
                    <div style={{background:'white'}} className='m-3 p-3'>
                        <h2>Your Order</h2>
                        <div style={{display:'flex',justifyContent:'space-between'}} className='border-bottom'>
                            <p>Total Quantity</p> <b>{quantity}</b>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}} className='border-bottom'>
                            <p>Subtotal</p> <b>${subtotal}</b>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}} className='border-bottom'>
                            <p>Delivery charges</p> <b><span style={{color:'tomato'}}>+</span> $20</b>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}} className='border-bottom'>
                            <p>Total Discount</p> <b><span style={{color:'tomato'}}>-</span> ${discount}</b>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{color:'tomato'}}><b>Total </b></p> <b style={{color:'tomato'}}>${grandTotal}</b>
                        </div>
                    </div>
                </Col>
            </Row>
            </form>
        </Container>
    );
};

export default CheckOut;