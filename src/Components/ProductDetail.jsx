import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import RecentProduct from './RecentProduct';
import { useDispatch } from 'react-redux';
import { addProduct } from '../app/featchers/CartSlice';
import DashbordButton from '../Dashbord/DashbordButton';


const ProductDetail = () => {
    const { id } = useParams()
    const [singleproduct, setSingleProduct] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:9000/products/single/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id])
    const addToCart = (data)=>{
        dispatch(addProduct(data))
    }

    const img = singleproduct?.img
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={4}>
                <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: img,
                        },
                        largeImage: {
                            src: img,
                            width: 1000,
                            height: 1000
                        }
                    }} />
                </Col>
                <Col md={8}>
                    <h4 style={{color:'gray'}}>{singleproduct?.name}</h4>
                    <div onClick={()=>addToCart(singleproduct)}><button className='dashbordButton'>Add To Cart</button></div>
                    <p style={{color:'gray'}}>{singleproduct?.description}</p>
                    <p><b>Price:</b> ${singleproduct?.price}</p>
                    <p><b>Category:</b> {singleproduct?.category}</p>
                    {singleproduct?.discount && <p><b>Discount:</b> ${singleproduct?.discount}</p>}
                </Col>
            </Row>
            <RecentProduct restrictedProduct={singleproduct} />
        </Container>
    );
};

export default ProductDetail;