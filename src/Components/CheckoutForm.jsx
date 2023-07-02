import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useDispatch } from 'react-redux';
import {deleteAllProducts} from '../app/featchers/CartSlice'

const CheckoutForm = ({ price, setBilingsForm,products }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const {user}= useContext(AuthContext)
    const [procecing,setProcecing]= useState(false)
    const [transectionId,setTransectionId]= useState('')



    useEffect(() => {
        axios
            .post("http://localhost:9000/create-payment-intent", {
                price,
            })
            .then((res) => setClientSecret(res.data.clientSecret));
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setError(error.message)
        } else {
            setError('')

        }
        setProcecing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email:user?.email || "unknown",
                        name:user?.displayName || "anonymous",
                    },
                },
            },

        );
        if (confirmError) {
            setError(confirmError.message)
        }
        setBilingsForm(paymentIntent)
        setProcecing(false)

        if (paymentIntent.status === 'succeeded') {
            toast.success("Payment successful! Now, please input your billing details.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        if(paymentIntent.status === 'succeeded'){
            const ID = paymentIntent.id
            setTransectionId(ID)
            const payment = {
                email:user?.email,
                name:user?.displayName,
                transectionid:ID,
                items:products,
                itemsId:products.map((item)=> item._id),
                date:new Date(),
                status:'pending'
            }
            console.log(payment)
            fetch(`http://localhost:9000/paymentinformation`,{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

    }

    const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllProducts());
  };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button onClick={()=>handleDeleteAll()} type="submit" className='mt-5 w-100 dashbordButton' disabled={!stripe || !clientSecret}>
                {procecing ? 'processing' : 'Pay'}
            </button>
            {error && <h6 className='text-danger text-center'>{error}</h6>}
            {transectionId && <h6 className='text-success text-center'>Your Transection Id :<b> {transectionId}</b></h6>}
        </form>
    );
};

export default CheckoutForm;