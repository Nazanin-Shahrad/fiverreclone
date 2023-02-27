import React ,{useState , useEffect}from 'react';
import './Pay.scss';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe("pk_test_51MfsjTBJxpKhWn2Y1jjE3z4T48l3vpAhc2y988qVVNEsejIKceEXkCSL6PPotWZM1lYDuyiivg0QlTOSVsCrt1JQ00QuSeGwZ3");



const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    
    const { id } = useParams();
    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await newRequest.post(
              `/orders/create-payment-intent/${id}`
            );
            setClientSecret(res.data.clientSecret);
          } catch (err) {
            console.log(err);
          }
        };
        makeRequest();
      }, []);

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
    };


  return (
    <div className='pay'>
       {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay