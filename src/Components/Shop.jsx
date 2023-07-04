import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetAllProductsQuery } from '../app/featchers/api/apiSlice';
import Error from './Error';
import FilterSection from './FilterSection';
import Loading from './Loading';
import Product from './Product';
import Pagination from './Pagination';




const Shop = () => {
    const [filtercategory, setFilterCategory] = useState('all')
    const [filterInformation, setFilterInformation] = useState('')
    const [searchProduct, setSearchProduct] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const info = {
        filtercategory: filtercategory,
        filter: filterInformation,
        searchByShop: searchProduct
    }
    const { isLoading, isError, data } = useGetAllProductsQuery(info)


    const categorySelect = event => {
        setFilterCategory(event.target.value)
    }

    const filterinfo = (event) => {
        setFilterInformation(event.target.value)
    }

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = data?.slice(firstPostIndex, lastPostIndex)



    let content = null

    if (isLoading) {
        return <Loading />
    }
    if (!isLoading && isError) {
        content = <Error error='Thare was an Error' />
    }

    if (!isLoading && !isError && data?.length === 0) {
        content = <Error error='No Data Found' />
    }


    if (!isLoading && !isError && currentPost?.length > 0) {
        content = currentPost.map((product, index) => <Product key={index} product={product} />)
    }



    return (
        <Container fluid>
            <Row>
                <Col md={2} className='px-3 border-end mt-2 mb-2' style={{ height: 'auto' }}>
                    <FilterSection categorySelect={categorySelect} filterinfo={filterinfo} />
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={7} className='mx-auto'>
                            <input onChange={(e) => setSearchProduct(e.target.value)} type="text" className='p-2 mx-auto form-control mt-3' placeholder='Search Your Product' />
                        </Col>
                    </Row>
                    <Row>
                        {content}
                    </Row>
                </Col>
            </Row>
            <Row >
                <Col className='mx-auto text-center'>
                <Pagination setCurrentPage={setCurrentPage} totalPost={data.length} postPerPage={postPerPage}></Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;