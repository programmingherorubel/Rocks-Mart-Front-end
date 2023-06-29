import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const BillingDetails = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:9000/billingaddress`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Billing Details sent Successfull', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            console.log(data)
            reset()
        })

    };
    return (
        <>
            <div style={{ background: 'white' }} className='m-3 p-3'>
                <h2>Billing Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input {...register("firstname", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='First Name' />
                        <input {...register("lastname", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Last Name' />
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input {...register("country", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Country' />
                        <input {...register("city", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Town/City' />
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input {...register("zipcode", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Postcode ZIP' />
                        <input {...register("phonenumber", { required: true })} type="text" className='rounded-0 form-control mt-3 p-2' placeholder='Mobile Number' />
                    </div>
                    <input {...register("email", { required: true })} type="email" className='rounded-0 form-control mt-3 p-2' value={user?.email} />
                    <textarea {...register("description", { required: true })} rows={6} type="text" className='rounded-0 form-control mt-4 p-3' placeholder='Description' />
                    <div className='text-center'><button type='submit' className='dashbordButton'>Submit</button></div>
                </form>
            </div>
        </>
    );
};

export default BillingDetails;