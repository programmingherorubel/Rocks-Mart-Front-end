import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DashbordButton from '../Dashbord/DashbordButton';
import '../Style/Product.css';
import { addProduct } from '../app/featchers/CartSlice';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { addWishlist } from '../app/featchers/wishlistSlice';


const Product = ({ product }) => {
    const {user}=useContext(AuthContext)
    
    
    const dispatch = useDispatch()

    const addToCart = (data)=>{
        dispatch(addProduct(data))
    }

    const wishlist  = (data)=>{
        dispatch(addWishlist(data))
    }

    const loginAlart = ()=>{
        toast.warning('You cannot add a product while logged in', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true, 
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    
   
    return (
        <Col lg={3} md={4} sm={6} className='mx-auto text-center mt-5' style={{ position: 'relative' }}>
            <div className='mainDiv'>
                <img src={product.img} style={{ height: '230px' }} className='image__img img-fluid' alt="" />
                <div className='overlay overlay--blur'>
                    <ul style={{ display: 'flex', gap: '30px' }}>
                       {user?.email ?  <li onClick={()=>addToCart(product)} style={{ listStyle: 'none', cursor: 'pointer' }}><FiShoppingCart style={{ fontSize: '24px' }} /></li>
                        :
                        <li onClick={loginAlart} style={{ listStyle: 'none', cursor: 'pointer' }}><FiShoppingCart style={{ fontSize: '24px' }} /></li>}
                        <li onClick={()=>wishlist(product)} style={{ listStyle: 'none', cursor: 'pointer' }}><BsHeart style={{ fontSize: '24px' }} /></li>
                        <Link style={{color:'white'}} to={`/single/${product._id}`}><li  style={{ listStyle: 'none', cursor: 'pointer' }}><AiFillEye style={{ fontSize: '24px' }} /></li></Link>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <p style={{ fontWeight: '700' }}>{product.name}</p>
                <p style={{ color: 'tomato', fontWeight: '700' }}>$ {product.price}</p>
            </div>
            {product?.discount && <h5 style={{ color: 'white', position: 'absolute', top: '0px', right: '15px', padding: '10px', background: 'tomato', height: '60px', width: '60px', borderRadius: '50%' }}>{product?.discount}% Off</h5>}
            {user?.email ? <div onClick={()=>addToCart(product)}><DashbordButton title='Add To Cart'></DashbordButton></div>
            :
            <div onClick={loginAlart}><DashbordButton title='Add To Cart'></DashbordButton></div>}
        </Col>
    );
};

export default Product;