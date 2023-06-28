import React from 'react';

const BillingDetails = () => {
    return (
        <>
            <div style={{ background: 'white' }} className='m-3 p-3'>
                <h2>Billing Details</h2>

                <div style={{ display: 'flex', gap: '5px' }}>
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='FirstName' />
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='LastName' />
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Country' />
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Town/City' />
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Postcode ZIP' />
                    <input type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Mobile Number' />
                </div>
                <input type="email" className='rounded-0 form-control mt-3 p-2' placeholder='Input Your Email' />
                <textarea rows={6} type="text" className='rounded-0 form-control mt-4 p-3' placeholder='Input Your Email' />

            </div>
        </>
    );
};

export default BillingDetails;