import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import '../Style/CustomNavbar.css';
import { useGetnavbarQuery } from '../app/featchers/api/apiSlice';
import { FiUser } from 'react-icons/fi';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {AiOutlineLogin} from 'react-icons/ai'
import { toast } from 'react-toastify';

const CustomNavbar = () => {
  const [searchbar,setSearchBar]= useState(false)
  const {data,isLoading,isError}= useGetnavbarQuery() 
  const [activeMenu,setActiveMenu]= useState(false)
  const {user,logout}= useContext(AuthContext)
  const [userSystem,setUserSystem]=useState(false)
  let myNavigation = null
  let mobileMenu = null
  
  
const hallo = ()=>{
  toast('hello')
  alert('hello')
}


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
                <li className="mt-3" style={{ listStyle: 'none' }}>
                  <BsSearch style={{ fontSize: '24px' }} onClick={()=>setSearchBar(!searchbar)} />
                </li>
                <li className="mt-3" style={{ listStyle: 'none' }}>
                  <Link to='/cart' style={{color:'black'}}><BsCart2 style={{ fontSize: '24px' }} /></Link>
                </li>
                <li className="mt-3" style={{ listStyle: 'none',position:'relative'}} onClick={()=>setUserSystem(!userSystem)}> 
                <AiOutlineUser style={{ fontSize: '24px' }} />
                  {userSystem && <ul className='dropdownn list-group' style={{position:'absolute'}}>
                    {user?.email ? <li class="list-group-item " style={{display:'flex',color:'tomato',fontWeight:'700'}} onClick={()=>logout()}>Logout <AiOutlineLogin style={{fontSize:'22px'}} /></li>
                    :
                    <li class="list-group-item " style={{display:'flex'}}>
                      <Link style={{textDecoration:'none',color:'black',fontWeight:'700',padding:'0px 5px'}} to='/login'>Login</Link> <AiOutlineLogin style={{fontSize:'22px',fontWeight:'700'}} />
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
        <Row className={searchbar ? 'searchbaractive searchBar ' : 'searchBar'}>
            <Col md={6} className='mx-auto'>
                <input type="text" placeholder='Search Your Product'style={{border:'2px solid #12375D'}} className='form-control rounded-0 p-2' />
            </Col>
        </Row>
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
                <p onClick={hallo}>k</p>
              </ul>
          </div>
    </Container>
  );
};

export default CustomNavbar;




   
