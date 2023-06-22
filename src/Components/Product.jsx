import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Product.css'
import { FiShoppingCart } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import DashbordButton from '../Dashbord/DashbordButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Product = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col lg={3} md={4} sm={6} className='mx-auto text-center mt-5' style={{ position: 'relative' }}>
            <div className='mainDiv'>
                <img src={product.img} style={{ height: '230px' }} className='image__img img-fluid' alt="" />
                <div className='overlay overlay--blur'>
                    <ul style={{ display: 'flex', gap: '30px' }}>
                        <li style={{ listStyle: 'none', cursor: 'pointer' }}><FiShoppingCart style={{ fontSize: '24px' }} /></li>
                        <li style={{ listStyle: 'none', cursor: 'pointer' }}><BsHeart style={{ fontSize: '24px' }} /></li>
                        <li  onClick={handleShow} style={{ listStyle: 'none', cursor: 'pointer' }}><AiFillEye style={{ fontSize: '24px' }} /></li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <p style={{ fontWeight: '700' }}>{product.name}</p>
                <p style={{ color: 'tomato', fontWeight: '700' }}>$ {product.price}</p>
            </div>
            {product?.discount && <h5 style={{ color: 'white', position: 'absolute', top: '0px', right: '15px', padding: '10px', background: 'tomato', height: '60px', width: '60px', borderRadius: '50%' }}>{product?.discount}% Off</h5>}
            <DashbordButton title='Add To Cart'></DashbordButton>
            {/* Modal  */}
            <Modal show={show}  size="lg" centered onHide={handleClose}>
                <Modal.Header style={{background:'#001E3C',color:'white'}} closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={product.img} className='img-fluid' alt="" />
                            <div style={{display:'flex',justifyContent:'space-between',background:'#001E3C'}} className='p-4'>
                            <h5 style={{color:'white'}}>Price:$ {product.price}</h5>
                            {product?.discount && <h5 style={{color:'white'}}>Discount: {product.discount} %</h5>}
                            </div>
                        </Col>
                        <Col md={6}>
                            <p style={{color:'gray'}}><b> Description:</b>{product.description}</p>
                            <DashbordButton title='Add To Cart'></DashbordButton>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            {/* Modal  */}
        </Col>
    );
};

export default Product;