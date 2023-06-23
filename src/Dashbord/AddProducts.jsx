import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashbordButton from './DashbordButton';
import Title from './Title';



const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
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
            const photo = result.data.display_url
            const information = {
                img:photo,
                name:data.name,
                price:data.price,
                discount:data.discount,
                description:data.description,
                category:data.category,
            }
            fetch(`http://localhost:9000/products`,{
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
    };
    
    return (
        <Container fluid style={{ background: 'white' }}>
            <Title title="Add A New Product"/>
            <Row>
                <Col md={6} className='mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="file" className='form-control mt-3 p-2' {...register("img", { required: true })} />
                    <input type="text" placeholder='Product Name' className='form-control mt-3 p-2'{...register("name", { required: true })} />
                    <input type="number" placeholder='Product Price' className='form-control mt-3 p-2'{...register("price", { required: true })} />
                    <input type="number" placeholder='Product Discount' className='form-control mt-3 p-2'{...register("discount")} />

                    <select type="text" placeholder='Product Name' className='form-select mt-3 p-2'{...register("category", { required: true })} >
                        <option selected>Select an option</option>
                        <option>watter-Bottol</option>
                        <option>Bag</option>
                        <option>Laptop-Sticker</option>
                        <option>Mobile-Cover</option>
                    </select>
                    <textarea  rows={5} type="text" placeholder='Product description' className='form-control mt-3 p-2'{...register("description", { required: true })} />
                    <DashbordButton title='Add A New Product'></DashbordButton>
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProducts;