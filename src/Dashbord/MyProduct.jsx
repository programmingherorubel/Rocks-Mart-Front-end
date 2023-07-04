import moment from 'moment/moment';
import React, { useContext, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { useMyProductQuery } from '../app/featchers/api/apiSlice';

import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, data, isError } = useMyProductQuery(user?.email);
    const [show, setShow] = useState(false);
    const [textvalue,setTextValue]=useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(data)
    const handelSubmit = (e)=>{
        const information = {
            name:user?.displayName,
            img:user?.photoURL,
            email:user?.email,
            review:textvalue
        }
        fetch(`https://best-server-five.vercel.app/review`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('successfully send review', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            console.log(data)
        })
    }


    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (isError) {
        content = <Error error='There was an error' />;
    } else if (data.length === 0) {
        content = <Error error='No Data Found' />;
    } else {
        content = (
            <Table responsive className='mt-5'>
                <thead>
                    <tr>
                        <th className='text-center border'>Date</th>
                        <th className='text-center border'>Time</th>
                        <th className='text-center border'>Details</th>
                        <th className='text-center border'>Review For Product</th>
                        <th className='text-center border'>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className='text-center border'>
                                <b>Date {moment(item.date).format("MMM Do YY")}</b>
                            </td>
                            <td className='text-center border'>
                                <b>{moment(item.date).startOf('day').fromNow()}</b>
                            </td>
                            <td className='text-center border'>
                                <Link style={{ textDecoration: 'none', fontWeight: '700', color: 'black' }} to={`/singleorder/${item._id}`}>Product Details</Link>
                            </td>
                            <td className='text-center border'>
                                {item?.review === 'on' ? 
                                <button onClick={handleShow}  className='btn btn-info text-white'><b> Write a Review</b></button>
                                :
                                <button onClick={handleShow} disabled className='btn btn-info text-white'><b> Write a Revieww</b></button>
                            }
                            </td>

                            <td className='text-center border'>
                                <b>
                                    <button className='btn btn-success'>{item.status}</button>
                                </b>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }


    return (
        <Container>
            <Row>
                <Col md={10} className='mx-auto'>
                    {data?.length !== 0 ? <h3 style={{ color: 'black', textAlign: 'center' }} className='mt-3'>product history report</h3>
                        :
                        <h3 style={{ color: 'black', textAlign: 'center' }} className='mt-3'>You have not purchased any products yet</h3>}
                    <hr />
                    {content}
                </Col>
            </Row>
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Product Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea onChange={(e)=>setTextValue(e.target.value)} className='form-control' rows={6} type="text"  />
                    <button type='submit' onClick={handelSubmit} className='dashbordButton w-100'>Send Review</button>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default MyProduct;
