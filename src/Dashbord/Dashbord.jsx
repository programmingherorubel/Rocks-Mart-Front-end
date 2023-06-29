import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillHome, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsCartCheckFill } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import '../Style/Dashbord.css';

import { ToastContainer } from 'react-toastify';
import DashbordHeader from './DashbordHeader';

const Dashbord = () => {
    const [dashbordActive,setDashbordActive]= useState(false)
   
    return (
        <>
        <Container fluid>
            <Row>
                <DashbordHeader setDashbordActive={setDashbordActive} dashbordActive={dashbordActive}></DashbordHeader>
                <Col>
                    <div className={dashbordActive ? 'activeDashbrodMenubar dashbord' : 'dashbord'}>
                        <ul>
                            <li style={{listStyle:'none'}}><Link to='/' style={{color:'white',fontWeight:'700',textDecoration:'none'}}><AiFillHome style={{fontSize:'22px'}} className='mx-2' />Home</Link></li> 

                            <li className='mt-3' style={{listStyle:'none'}}><Link to='/dashbord/addproducts' style={{color:'white',fontWeight:'700',textDecoration:'none'}}><AiOutlinePlusCircle style={{fontSize:'22px'}} className='mx-2' />Add A Product</Link>
                            </li>

                            <li className='mt-3' style={{listStyle:'none'}}><Link to='/dashbord/myproduct' style={{color:'white',fontWeight:'700',textDecoration:'none'}}><BsCartCheckFill style={{fontSize:'22px'}} className='mx-2' />My Products</Link>
                            </li>


                        </ul>
                    </div>
                    <div className='dashbordOutlet'>
                        <Outlet></Outlet>
                    </div>
                </Col>
            </Row>
        </Container>
        <ToastContainer />
        </>
    );
};

export default Dashbord;