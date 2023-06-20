import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetSingleCategoryQuery } from '../app/featchers/api/apiSlice';
import Product from '../Components/Product'
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import background from '../assets/category.jpg'
import { Parallax } from 'react-parallax';



const SingleCategory = () => {
    const { title } = useParams()
    const { isLoading, data, isError } = useGetSingleCategoryQuery(title)
    let content = null 

    if(isLoading){
        return <Loading/>
    }
    if(!isLoading && isError){
        content = <Error error='Thare was an Error' />
    }

    if(!isLoading && !isError && data.length === 0){
        content = <Error error='No Data Found' />
    }

    if(!isLoading && !isError && data.length > 0){
        content = data.map((product,index) => <Product key={index} product={product} />)
    }

    const info =  (data.slice(0,1).map(sampleData => sampleData.category))
    
      const insideStyles = {
        color: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontWeight:"700",
        fontSize:"40px"
      };
      const image1 = background
    return (
        <Container fluid>
            <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
                <div style={{ height: 500 }}>
                    <div style={insideStyles}><h1>{info}</h1></div>
                </div>
            </Parallax>
            <Row>
                {content}
            </Row>
        </Container>
    );
};

export default SingleCategory;