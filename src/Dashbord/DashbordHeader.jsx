import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiOutlineBars } from 'react-icons/ai';
import { AuthContext } from '../AuthProvider/AuthProvider';

const DashbordHeader = ({dashbordActive,setDashbordActive}) => {
    const {user}= useContext(AuthContext)
    return (
        <Container fluid className='header py-2' style={{background:'#001E3C',position:'sticky',top:'0px',zIndex:'1000'}}>
            <Row>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='d-flex'>
                    <span onClick={()=>setDashbordActive(!dashbordActive)}><AiOutlineBars className='hamburgerdashbord mt-2 mx-3'style={{fontSize:'22px',color:'white'}} /> </span>
                    <div style={{display:'flex',justifyContent:'start'}}>
                        <h4 style={{ fontWeight: '700',color:'white' }}>
                            Rocks
                            <span style={{ color: 'tomato' }}>Mart</span>
                            <span style={{ fontSize: '30px' }}>.</span>
                        </h4>
                        </div>
                    </div>
                  <img src={user?.imgURL} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="" />
                </div>
            </Row>
        </Container>
    );
};

export default DashbordHeader;


