import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import '../Style/CustomNavbar.css';
import { useGetnavbarQuery, useMyWishlitQuery } from '../app/featchers/api/apiSlice';

const CustomNavbar = () => {
  
  const {data,isLoading,isError}= useGetnavbarQuery() 
  const [activeMenu,setActiveMenu]= useState(false)
  const {user,logout}= useContext(AuthContext)
  const [userSystem,setUserSystem]=useState(false)
  const { products } = useSelector(state => state.products)
  const { wishlist } = useSelector(state => state.wishlist)
    

  let myNavigation = null
  let mobileMenu = null
 
 


  if(isLoading){
    return <Loading/>
  }

  if(!isLoading && isError){
    return <Error error="There was an Error"/>
  }

  if(!isLoading && !isError && data.length === 0){
    return <Error error="No Data Found"/>
  }

  // 8.5
  

   myNavigation = data?.navigation.map((item, index) => (
      <li key={index} style={{ listStyle: 'none' }}>
        <Link
          style={{
            textDecoration: 'none',
            color: 'gray',
            fontWeight: '600',
            borderBottom: '2px solid transparent',
            transition: 'border-color 0.3s ease',
            textTransform:'uppercase',
            fontSize:'15px'
          }}
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    ));

    mobileMenu = data?.navigation.map((item, index) => (
      <li key={index} style={{ listStyle: 'none' }}>
        <Link
          style={{
            textDecoration: 'none',
            color: 'gray',
            fontWeight: '600',
            borderBottom: '2px solid transparent',
            transition: 'border-color 0.3s ease',
            textTransform:'uppercase',
            fontSize:'15px'
          }}
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    ));

  

  return (
    <Container className="navigation" fluid style={{ background: 'white',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' }}>
      <Container>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col md={3} className='col-6'>
            <div style={{display:'flex',justifyContent:'start'}}>
              <h4 style={{ fontWeight: '700' }}>
                Rocks
                <span style={{ color: 'tomato' }}>Mart</span>
                <span style={{ fontSize: '30px' }}>.</span>
              </h4>
            </div>
          </Col>

          <Col md={5} className="mx-auto text-center navbarLink">
            <div>
              <ul className="mt-3" style={{ display: 'flex', gap: '20px' }}>
                {myNavigation}
              </ul>
            </div>
          </Col>
          <Col md={4} className='col-6 text-right'>
            <div>
              <ul style={{ display: 'flex', gap: '20px', justifyContent: 'end' }}>
                
                <li className="mt-3" style={{ listStyle: 'none' ,position:'relative'}}>
                  <Link to='/cart' style={{color:'black'}}><BsCart2 style={{ fontSize: '24px' }} /></Link>
                  <p style={{position:'absolute',top:'-15px',right:'-4px',color:'white',color:'tomato'}}><b>{products?.length}</b></p>
                </li>
                <li className="mt-3" style={{ listStyle: 'none' ,position:'relative'}}>
                  <Link to='/wishlist' style={{color:'black'}}><AiOutlineHeart style={{ fontSize: '24px' }} /></Link>
                  <p style={{position:'absolute',top:'-15px',right:'-4px',color:'white',color:'tomato'}}><b>{wishlist?.length}</b></p>
                </li>
                <li className="mt-3" style={{ listStyle: 'none',position:'relative'}} onClick={()=>setUserSystem(!userSystem)}> 
                <AiOutlineUser style={{ fontSize: '24px' }} />
                  {userSystem && <ul className='dropdownn list-group' style={{position:'absolute'}}>

                  <Link style={{textDecoration:'none'}} to='/myproduct'><li class="list-group-item " style={{display:'flex',fontWeight:'700'}} >My Order <BsFillCartPlusFill style={{fontSize:'22px'}}className='mx-2' /></li></Link>

                    {user?.email ? <li class="list-group-item " style={{display:'flex',color:'tomato',fontWeight:'700'}} onClick={()=>logout()}>Logout <AiOutlineLogin style={{fontSize:'22px'}} className='mx-2'/></li>
                    :
                    <li class="list-group-item " style={{display:'flex'}}>
                      <Link style={{textDecoration:'none',color:'black',fontWeight:'700',padding:'0px 5px'}} to='/login'>Login</Link> <AiOutlineLogin style={{fontSize:'22px',fontWeight:'700'}}className='mx-2' />
                    </li>}
                    <li class="list-group-item " style={{display:'flex'}}>
                      <Link style={{textDecoration:'none',color:'black',fontWeight:'700',padding:'0px 5px'}} to='/registration'>Registration</Link> <FiUser style={{fontSize:'22px',fontWeight:'700'}} />
                    </li>
                  </ul>}
                </li>
                <li  className="mt-3 bars" style={{ listStyle: 'none' }}>
                <FaBars onClick={()=>setActiveMenu(!activeMenu)} style={{ fontSize: '24px' }} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
        
        <div>
          <ul className={activeMenu ?  'mobilemenu mobileActivemenu' : 'mobilemenu'}>
          <div style={{display:'flex',justifyContent:'start'}}>
              <h4 style={{ fontWeight: '700' }}>
                Rocks
                <span style={{ color: 'tomato' }}>Mart</span>
                <span style={{ fontSize: '30px' }}>.</span>
              </h4>
            </div>
                {mobileMenu}
              </ul>
          </div>
    </Container>
  );
};

export default CustomNavbar;




   
