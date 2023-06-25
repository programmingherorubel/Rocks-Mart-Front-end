import React from 'react';
import { Col } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DashbordButton from '../Dashbord/DashbordButton';
import '../Style/Product.css';
import { addProduct } from '../app/featchers/CartSlice';


const Product = ({ product }) => {
  
    
    
    const dispatch = useDispatch()

    const addToCart = (data)=>{
        dispatch(addProduct(data))
    }

    return (
        <Col lg={3} md={4} sm={6} className='mx-auto text-center mt-5' style={{ position: 'relative' }}>
            <div className='mainDiv'>
                <img src={product.img} style={{ height: '230px' }} className='image__img img-fluid' alt="" />
                <div className='overlay overlay--blur'>
                    <ul style={{ display: 'flex', gap: '30px' }}>
                        <li style={{ listStyle: 'none', cursor: 'pointer' }}><FiShoppingCart style={{ fontSize: '24px' }} /></li>
                        <li style={{ listStyle: 'none', cursor: 'pointer' }}><BsHeart style={{ fontSize: '24px' }} /></li>
                        <Link style={{color:'white'}} to={`/single/${product._id}`}><li  style={{ listStyle: 'none', cursor: 'pointer' }}><AiFillEye style={{ fontSize: '24px' }} /></li></Link>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <p style={{ fontWeight: '700' }}>{product.name}</p>
                <p style={{ color: 'tomato', fontWeight: '700' }}>$ {product.price}</p>
            </div>
            {product?.discount && <h5 style={{ color: 'white', position: 'absolute', top: '0px', right: '15px', padding: '10px', background: 'tomato', height: '60px', width: '60px', borderRadius: '50%' }}>{product?.discount}% Off</h5>}
            <div onClick={()=>addToCart(product)}><DashbordButton title='Add To Cart'></DashbordButton></div>
        </Col>
    );
};

export default Product;