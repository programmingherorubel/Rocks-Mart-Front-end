import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Dashbord.css'
import { Link, Outlet } from 'react-router-dom';
import {AiOutlinePlusCircle,AiFillHome} from 'react-icons/ai'

import DashbordHeader from './DashbordHeader';
import { ToastContainer } from 'react-toastify';

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

                            <li className='mt-3' style={{listStyle:'none'}}><Link to='/dashbord/addproducts' style={{color:'white',fontWeight:'700',textDecoration:'none'}}><AiOutlinePlusCircle style={{fontSize:'22px'}} className='mx-2' />Add A Product</Link></li>
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