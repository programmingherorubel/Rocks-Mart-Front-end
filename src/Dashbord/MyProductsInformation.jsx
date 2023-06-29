import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';



const MyProductsInformation = () => {
  const info = useLoaderData()
  const ref = React.createRef();
  const status = info[0].status
  
  const products = info[0].items

  let quantity = 0;
  let discount = 0;
  let grandTotal = 0;
  let price = 0;
  
  for (let product of products) {
      price = product.price;
      quantity += product.quantity;
      discount += product.discount * product.quantity;
      grandTotal += price * product.quantity;
  }
  
  grandTotal -= discount;

  

  return (
    
    <Container fluid ref={ref} >
      <Row>
        <Col>
        <div  style={{display:'flex',justifyContent:'space-between'}}>
          <div><p style={{color:'gray',marginTop:'10px'}}><b className='mx-2'>Invoice Number</b>:{info[0]._id} </p>
        <p style={{color:'gray',marginTop:'10px'}}><b className='mx-2'>Invoice Number</b>:{info[0].transectionid} </p></div>
        <div>
      
          <button className='bg-info btn m-3'style={{fontWeight:'700',color:'white'}}>Download Pdf</button>
         
        </div>
        </div>
          <Table responsive className='mt-5'>
            <thead>
              <tr>
                <th className='border text-center'>Img</th>
                <th className='border text-center'>Product Name</th>
                <th className='border text-center'>Product Discount</th>
                <th className='border text-center'>Product Price</th>
                <th className='border text-center'>Product Quantity</th>
                <th className='border text-center'>Total Price</th>
                <th className='border text-center'>Status</th>
              </tr>
            </thead>
            {
              products.map((item, index) => <tbody key={index}>
                <tr>
                  <td style={{ fontWeight: '700' }} className='border text-center'><img src={item.img} style={{ width: '50px' }} /></td>
                  <td style={{ fontWeight: '700' }} className='border text-center'>{item.name}</td>
                  <td style={{ fontWeight: '700' }} className='border text-center'>{item.discount ? item.discount : 'Without Discount'}</td>
                  <td style={{ fontWeight: '700' }} className='border text-center'>{item.price}</td>
                  <td style={{ fontWeight: '700' }} className='border text-center'>
                    {item.quantity}
                  </td>
                  <td style={{ fontWeight: '700' }} className='border text-center'>
                    {item.price * item.quantity - item.discount * item.quantity}
                  </td>
                  <td style={{ fontWeight: '700' }} className='border text-center'><button className='bg-success text-white btn'><b>{status}</b></button></td>
                </tr>
              </tbody>)
            }
          </Table>
        </Col>
        {products.length && <Col md={10}>
          <div className='text-end'>

            <p><b> Total Quantity ={quantity} </b></p>
            <p><b> Total discount Price =${discount} </b></p>
            <h5><b>Total Price =<span style={{ color: 'tomato' }}>${grandTotal} </span> </b></h5>
          </div>
        </Col>}
      </Row>
    </Container>
    
  );
};

export default MyProductsInformation;