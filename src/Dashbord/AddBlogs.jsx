import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashbordButton from './DashbordButton';
import Title from './Title';

const AddBlogs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const API_KEY = 'a4c0dd966ecf053081c192b4eebd2868'
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const photo = result.data.display_url
                const information = {
                    title:data.title,
                    description:data.description,
                    img:photo
                }
                fetch(`https://best-server-five.vercel.app/blogs`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(information)
                })
                .then(res => res.json())
                .then(insertData => {
                    alert('product add successfull')
                })
            })
    }
    return (
        <Container>
            <Title title="Add A New Blogs" />
            <Row>
                <Col className='mx-auto' md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("img", { required: true })} type="file" className='mt-3  form-control p-2' />
                        <input {...register("title", { required: true })} type="text" placeholder='Blog Title' className='mt-3  form-control p-2' />
                        <textarea {...register("description", { required: true })} rows={8} type="text" placeholder='Description' className='mt-3  form-control p-2' />
                        <div>
                            <DashbordButton title='Add A New Blog'></DashbordButton>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddBlogs;