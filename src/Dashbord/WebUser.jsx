import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useWebUserQuery } from '../app/featchers/api/apiSlice';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

const WebUser = () => {
    const { isLoading, data, isError,refetch } = useWebUserQuery()
    let content = null

    const createAdmin = (email)=>{
        fetch(`http://localhost:9000/users/admin/${email}`,{
            method:'PUT',
        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })
    }

    if (isLoading) {
        content = <Loading />;
    }
    if (!isLoading && isError) {
        content = <Error error='There was an error' />;
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <Error error='No Data Found' />;
    }
    if (data?.length > 0) {
        content = data.map((item, index) => {
            return <tbody key={index}>
                <tr>
                    <td className='border text-center'><img src={item.img} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" /></td>
                    <td className='mt-3 border text-center'>{item.name}</td>
                    <td className='mt-3 border text-center'>{item.email}</td>
                    <td className='mt-3 border text-center'><b>{item.role ? item.role : 'Users'}</b></td>
                    <td className='mt-3 border text-center'><button  onClick={()=>createAdmin(item.email)} className='text-white btn bg-success'>Convert To Admin</button></td>
                </tr>
            </tbody>
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                <h2 className='text-center'>Website users</h2>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className='border text-center'>Img</th>
                                <th className='border text-center'>Name</th>
                                <th className='border text-center'>Eamil</th>
                                <th className='border text-center'>Role</th>
                                <th className='border text-center'>Create Admin</th>
                            </tr>
                        </thead>
                        {content}
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default WebUser;