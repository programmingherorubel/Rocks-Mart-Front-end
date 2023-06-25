import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {incrementQuantity,decrementQuantity,deleteProduct} from '../app/featchers/CartSlice'

const Cart = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const incrementProduct = (id)=>{
        dispatch(incrementQuantity(id))
    }
    const decrementProduct = (id)=>{
        dispatch(decrementQuantity(id))
    }
    const DeleteProductForCart = (id)=>{
        console.log(id)
        dispatch(deleteProduct(id))
    }


    return (
        <Container  >
            <Row>
            {products.length === 0 && <h5 className='mt-5 p-5 text-center'style={{color:'tomato'}}>Your Cart Is Empty</h5>}
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
                                <b>$ {product.price}</b>
                            </p>
                            <p    style={{fontSize:'20px'}}>
                                <AiOutlinePlusCircle className='mx-3' style={{color:'gray',fontSize:'24px'}} onClick={()=>incrementProduct(product._id)} />
                                <b>{product.quantity}</b>
                                <AiOutlineMinusCircle onClick={()=>decrementProduct(product._id)} className='mx-3' style={{color:'gray',fontSize:'24px'}} />
                            </p>
                            <p onClick={()=>DeleteProductForCart(product._id)}  >
                                <b><AiOutlineCloseCircle  style={{fontSize:'24px',color:'tomato'}} /></b>
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