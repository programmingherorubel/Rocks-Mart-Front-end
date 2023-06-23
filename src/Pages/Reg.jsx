import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashbordButton from '../Dashbord/DashbordButton';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Reg = () => {
    // registration
    const { register, handleSubmit } = useForm();
    const {newuser}= useContext(AuthContext)
    const onSubmit = data => {
        if(data.password !== data.confirmpassword){
            return alert(`password did not matched!`)
        }
        const API_KEY = 'a4c0dd966ecf053081c192b4eebd2868'
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`
        fetch(url,{
            method:'POST',
            body:formData
          })
        .then(res => res.json())
        .then(result => {
            const mainUrl = result.data.display_url
            newuser(data.email,data.password,data.name,mainUrl)
        })
    };
    

    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <form className='mt-5 mb-5 p-5 border' onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <h4 style={{ fontWeight: '700' }}>
                            Rocks
                            <span style={{ color: 'tomato' }}>Mart</span>
                            <span style={{ fontSize: '30px' }}>.  Registration</span>
                        </h4>
                        </div>
                        <input {...register("img", { required: true})} type='file' className='form-control mt-3 p-3'/>
                        <input {...register("name", { required: true})}placeholder='Enter Your Full Name' type='text' className='form-control mt-3 p-3'/>
                        <input {...register("email", { required: true})}placeholder='Enter Your Email' type='email' className='form-control mt-3 p-3'/>
                        <input {...register("password", { required: true})}placeholder='Enter Your Password' type='password' className='form-control mt-3 p-3'/>
                        <input {...register("confirmpassword", { required: true})}placeholder='Enter Re-Password' type='password' className='form-control mt-3 p-3'/>
                        <div><DashbordButton title='Registration' /></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Reg;