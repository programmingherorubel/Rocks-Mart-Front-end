import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { products } = useSelector(state => state.products)
    return (
        <Container  >
            <Row>
                <Col>
                    {
                        products.map((product,index) => <div
                                                        key={index} 
                                                        className='mt-5 border p-3' 
                                                        style={{
                                                            display:'flex',
                                                            justifyContent:'space-between',
                                                            alignItems:'center',
                                                        }}>
                            <p >  
                                <b>{index + 1}</b>
                            </p> 
                            <p >  
                                <img src={product.img} style={{width:'70px'}} alt="" />
                            </p> 
                            <p >  
                                <b>{product.name}</b>
                            </p> 
                            <p >  
                                <b>{product.price}</b>
                            </p>
                            <p    style={{fontSize:'20px'}}>
                                <AiOutlinePlusCircle className='mx-3' style={{color:'gray',fontSize:'24px'}} />
                                <b>{product.quantity}</b>
                                <AiOutlineMinusCircle className='mx-3' style={{color:'gray',fontSize:'24px'}} />
                            </p>
                            <p   >
                                <b><AiOutlineCloseCircle style={{fontSize:'24px',color:'tomato'}} /></b>
                            </p> 
                            <p   >
                                <b>Total Price</b>
                            </p> 
                        </div>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;