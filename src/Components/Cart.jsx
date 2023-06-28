import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, deleteProduct } from '../app/featchers/CartSlice'
import { Link } from 'react-router-dom';


const Cart = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const incrementProduct = (id) => {
        dispatch(incrementQuantity(id))
    }
    const decrementProduct = (id) => {
        dispatch(decrementQuantity(id))
    }
    const DeleteProductForCart = (id) => {
        dispatch(deleteProduct(id))
    }



    let quantity = 0;
    let discount = 0;
    let grandTotal = 0;
    let price = 0;
    
    for (let product of products) {
        price = product.price;
        quantity += product.quantity;
        discount += product.discount * product.quantity;
        grandTotal += price * product.quantity;
    }
    
    grandTotal -= discount;
  


    return (
        <Container fluid>
            <Row>
                {products.length === 0 && <h5 className='mt-5 p-5 text-center' style={{ color: 'tomato' }}>Your Cart Is Empty</h5>}
                <Col>
                    {products.length && <Table responsive className='mt-5'>
                        <thead>
                            <tr>
                                <th className='border text-center'>Img</th>
                                <th className='border text-center'>Product Name</th>
                                <th className='border text-center'>Product Discount</th>
                                <th className='border text-center'>Product Price</th>
                                <th className='border text-center'>Product Quantity</th>
                                <th className='border text-center'>Total Price</th>
                                <th className='border text-center'>Delete Product</th>
                            </tr>
                        </thead>
                        {
                            products.map((item, index) => <tbody key={index}>
                                <tr>
                                    <td style={{ fontWeight: '700' }} className='border text-center'><img src={item.img} style={{ width: '50px' }} /></td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.name}</td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.discount ? item.discount : 'Without Discount'}</td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.price}</td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>
                                        <AiOutlinePlusCircle className='mx-3' style={{ color: 'gray', fontSize: '24px' }} onClick={() => incrementProduct(item._id)} />{item.quantity}<AiOutlineMinusCircle onClick={() => decrementProduct(item._id)} className='mx-3' style={{ color: 'gray', fontSize: '24px' }} />
                                    </td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>
                                        {item.price * item.quantity - item.discount * item.quantity}
                                    </td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>
                                        <AiOutlineCloseCircle onClick={() => DeleteProductForCart(item._id)} style={{ fontSize: '24px', color: 'tomato' }} />
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    }
                </Col>
                {products.length && <Col md={10}>
                    <div className='text-end'>
                        
                            <p><b> Total Quantity ={quantity} </b></p>
                            <p><b> Total discount Price =${discount} </b></p>
                            <h5><b>Total Price =<span style={{color:'tomato'}}>${grandTotal} </span> </b></h5>
                            <Link to='/checkout'><button className='dashbordButton'>CheckOut</button></Link>
                    </div>
                </Col>}
            </Row>
        </Container>
    );
};

export default Cart;