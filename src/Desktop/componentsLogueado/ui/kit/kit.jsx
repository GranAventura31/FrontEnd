import React from 'react'
import swal from 'sweetalert2';
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
// import {AiOutlineArrowLeft} from 'react-icons/ai'

const stripePromise = loadStripe('pk_test_51NBLwlHRmqMvRqXdLkSWy4RrSbSVG6StVwK5qFNdM68AkJjwwT0EermDVi3cHWk2FElFvne4G5AtOeLBXmwC1WpV00kLzJATet');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const reservationAlert = () => {
    swal.fire({
      icon: 'success',
      text: 'Compra exitosa',
      confirmButtonText: 'Cool'
    });
  };

  const storedUserData = localStorage.getItem('totalPrice');
  // const aux = JSON.parse(storedUserData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("http://localhost:5000/api/checkout", {
          id,
          amount: storedUserData
        });
        reservationAlert();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      elements.getElement(CardElement).clear();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cradCompra">
      <div className='divImgCompra'>
        <CardElement className='tarjeta' />
      </div>
      <h3 className='precioCompra'>Valor a pagar: {storedUserData}$</h3>
      <button className='btnComprar'>Comprar</button>
    </form>
  );
};

export const Kit = () => {
  
const navigate = useNavigate()
const clickVolver = () =>{
  navigate('/ContenidoLogueado')
}
  return (
    <div className='Kits'>
      <div className='divDevolverCarrito'>
      <AiOutlineArrowLeft className='devolverCarrito' onClick={clickVolver}/>
      </div>
      <div className='divImgKit'>
        <img className='imagenkit' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683229573/niko/fiesta_excursion_fmfb4a.webp" alt="" />
      </div>
      <div className='kitLogueado'>
        <h1 className='nombrekit'>Kit especial de Gran Aventura</h1>
        <p className='desckit'>Este es el kit que brinda Gran Aventura para nuestros excursionistas.</p>
      <Elements stripe={stripePromise}>
      <CheckoutForm />
      </Elements>
      </div>
    </div>
  );
};