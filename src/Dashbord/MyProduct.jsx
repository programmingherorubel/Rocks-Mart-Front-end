import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useMyProductQuery } from '../app/featchers/api/apiSlice';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
const { isLoading, data, isError } = useMyProductQuery(user?.email);


console.log(data)
let content = null;

if (isLoading) {
  content = <Loading />;
}

if (!isLoading && isError) {
  content = <Error error='There was an error' />;
}

if (!isLoading && !isError && data.length === 0) {
  content = <Error error='No Data Found' />;
}

if (!isLoading && !isError && data.length > 0) {
    content = data.map((item, index) => {
      
      return (
        <div className='' key={index}>
          <Link to={`/singleorder/${item._id}`} style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: 'gray', padding: '8px' }} className='border mx-auto mt-3'>
            <b>Date {moment(item.date).format("MMM Do YY")}</b>
            <b>{ moment(item.date).startOf('day').fromNow()}</b>
            <b><button className='btn btn-danger'>Delete History</button></b>
          </Link>
        </div>
      );
    });
  }

    return (
        <Container>
            <Row>
                <Col md={10} className='mx-auto'>
                    {content}
                </Col>
            </Row>
        </Container>
    );
};

export default MyProduct;