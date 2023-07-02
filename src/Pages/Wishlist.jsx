import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../app/featchers/CartSlice';
import { AiFillDelete } from 'react-icons/ai'
import { deleteWishlist } from '../app/featchers/wishlistSlice';


const Wishlist = () => {
    const { wishlist } = useSelector(state => state.wishlist)
    const dispatch = useDispatch()

    const addToCart = (data) => {
        dispatch(addProduct(data))
    }

    const removeWishlist = (id)=>{
        dispatch(deleteWishlist(id))
    }


    return (
        <Container>
            <Row>
                <Col>
                    {wishlist.length === 0 ? <h5 className='mt-5 p-5 text-center' style={{ color: 'tomato' }}>Your wishlist Is Empty</h5> : <Table responsive className='mt-5'>
                        <thead>
                            <tr>
                                <th className='border text-center'>Img</th>
                                <th className='border text-center'>Product Name</th>
                                <th className='border text-center'>Product Discount</th>
                                <th className='border text-center'>Product Price</th>
                                <th className='border text-center'>Add To Cart</th>
                                <th className='border text-center'>Delete Wishlist</th>

                            </tr>
                        </thead>
                        {
                            wishlist.map((item, index) => <tbody key={index}>
                                <tr>
                                    <td style={{ fontWeight: '700' }} className='border text-center'><img src={item.img} style={{ width: '50px' }} /></td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.name}</td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.discount ? item.discount : 'Without Discount'}</td>
                                    <td style={{ fontWeight: '700' }} className='border text-center'>{item.price}</td>
                                    <td onClick={() => addToCart(item)} style={{ fontWeight: '700' }} className='border text-center'><button className='dashbordButton'>Add To Cart</button></td>
                                    <td style={{ fontWeight: '700' }} onClick={()=>removeWishlist(item._id)} className='border text-center'><AiFillDelete style={{ fontSize: '24px', color: 'tomato' }} /></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>}
                </Col>
            </Row>
        </Container>
    );
};

export default Wishlist;