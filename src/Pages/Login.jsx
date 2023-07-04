import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashbordButton from '../Dashbord/DashbordButton';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginuser,googleSingIn} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const onSubmit = data => {
        loginuser(data.email,data.password)
        navigate(from)
    }
   
    const googleLogin = ()=>{
        googleSingIn()
        navigate(from)
    }
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <form className='mt-5 mb-5 p-5 border'  onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <h4 style={{ fontWeight: '700' }}>
                            Rocks
                            <span style={{ color: 'tomato' }}>Mart</span>
                            <span style={{ fontSize: '30px' }}>.  Login</span>
                        </h4>
                        </div>
                        
                        <input {...register("email", { required: true})} placeholder='Enter Your Email' type='email' className='form-control mt-3 p-3'/>
                        <input {...register("password", { required: true})}  placeholder='Enter Your Password' type='password' className='form-control mt-3 p-3'/>
                        
                        <div><DashbordButton title='Login' /></div>
                        <div onClick={()=>googleLogin()}><DashbordButton title='Sign In With Google' /></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;