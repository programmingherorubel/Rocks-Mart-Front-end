import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useGetProductQuery } from '../app/featchers/api/apiSlice';
import Slider from "react-slick";
import Loading from './Loading';
import Error from './Error';
import { useDispatch } from 'react-redux';
import { addProduct } from '../app/featchers/CartSlice';
import { AiFillEye } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DashbordButton from '../Dashbord/DashbordButton';

const RecentProduct = ({ restrictedProduct }) => {
    const { data,isError,isLoading } = useGetProductQuery();
    const dispatch = useDispatch()
    const addToCart = (data)=>{
        dispatch(addProduct(data))
    }
    let content = null
    let newarray = []

    if(isLoading){
        content = <Loading/>
    }

    if(!isLoading && isError){
        content = <Error error='Thare was an error'/>
    }

    if(!isLoading && !isError && data?.length === 0){
        content = <Error error='Data Not Found'/>
    }

    if (!isLoading && !isError && data?.length > 0) {
        content = data
          .filter(
            (product) =>
              product?.category === restrictedProduct?.category &&
              product?._id !== restrictedProduct?._id
          )
          .map((product, index) => (
            <>
            <div className='mainDiv' key={index}>
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
            </>
          ));
      }

  
   

   
    var settings = {
        dots: false,
        infinite: false,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Row className='mt-5'>
           <hr />
            <h3 style={{ color: 'gray' }} className='mt-4 mb-4'>Similar Products</h3> 
            <Col>
                <Slider {...settings} >
                    {content}
                </Slider>
            </Col>
        </Row>
    );
};

export default RecentProduct;



