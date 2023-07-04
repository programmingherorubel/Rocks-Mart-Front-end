import moment from 'moment';
import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { useAllOrderQuery } from '../app/featchers/api/apiSlice';

const AllOrder = () => {
    const {isLoading,data,isError,refetch} = useAllOrderQuery()
   
  
    let content = null;

        const updateOrder = (id)=>{
            fetch(`https://best-server-five.vercel.app/paymentinformation/${id}`,{
                method:'PATCH',
            })
            .then(res => res.json())
            .then(result => {
                console.log(data)
                refetch()
            })
        }
    

        const updateOrderpending = (id)=>{
            fetch(`https://best-server-five.vercel.app/paymentinformation/pending/${id}`,{
                method:'PATCH',
            })
            .then(res => res.json())
            .then(resultData => {
                console.log(resultData)
                refetch()
            })
        }

        const reviewOn = (id)=>{
            fetch(`https://best-server-five.vercel.app/paymentinformation/on/${id}`,{
                method:'PUT',
            })
            .then(res => res.json())
            .then(resultData => {
                console.log(resultData)
                refetch()
            })
        }
        const reviewoff = (id)=>{
            fetch(`https://best-server-five.vercel.app/paymentinformation/off/${id}`,{
                method:'PUT',
            })
            .then(res => res.json())
            .then(resultData => {
                console.log(resultData)
                refetch()
            })
        }

        

    if (isLoading) {
        content = <Loading />;
    } else if (isError) {
        content = <Error error='There was an error' />;
    } else if (data.length === 0) {
        content = <Error error='No Data Found' />;
    } else if(data.length > 0){
        content = (
            <Table responsive  class="mt-5 table table-bordered" style={{overflowX:'auto'}}>
                <thead>
                    <tr>
                        <th className='text-center border'>Order Email</th>
                        <th className='text-center border'>Order Date</th>
                        <th className='text-center border'>Review Options</th>
                        <th className='text-center border'>Current Status</th>
                        <th className='text-center border'>Product Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            
                            <td className='text-center border'>
                                <b>{item.email}</b>
                            </td>
                            <td className='text-center border'>
                                <b>Date {moment(item.date).format("MMM Do YY")}</b>
                            </td>
                            
                            <td className='text-center border'>
                                <button disabled={item.review === 'on'} onClick={()=>reviewOn(item._id)} className='btn btn-warning mx-2 text-white'><b> On</b></button>

                                <button disabled={item.review === 'off'} onClick={()=>reviewoff(item._id)} className='btn btn-danger mx-2 text-white'><b> Off</b></button>
                            </td>
                            <td className='text-center border'>
                                <b>
                                    <b> {item.status}</b>
                                </b>
                            </td>
                            <td className='text-center border'>
                                <b>
                                <button disabled={item.status === 'Order Confirmed'} onClick={()=>updateOrder(item._id)} className='btn btn-success mx-2'> Successful</button>

                                <button onClick={()=>updateOrderpending(item._id)} disabled={item.status === 'pending'} className='btn btn-warning mx-2'> Pending</button>
                                </b>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
    return (
        <Container>
             <h3 className='text-center'>Order Information</h3>
            <Row>
                <Col>
                    {content}
                </Col>
            </Row>
           
        </Container>
    );
};

export default AllOrder;