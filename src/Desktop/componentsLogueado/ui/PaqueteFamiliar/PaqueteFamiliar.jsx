import React, {useState} from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Modal from 'react-modal'
import swal from 'sweetalert2';
import { FormGroup,Input,Label } from 'reactstrap'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useNavigate } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51NBLwlHRmqMvRqXdLkSWy4RrSbSVG6StVwK5qFNdM68AkJjwwT0EermDVi3cHWk2FElFvne4G5AtOeLBXmwC1WpV00kLzJATet');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const reservationAlert = () => {
    swal.fire({
      icon: 'success',
      text: 'Reserva exitosa',
      confirmButtonText: 'Cool'
    });
  };

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
          amount: 1100000
        });
        reservationAlert();
        const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);
//   const reservarPaquete = (e) =>{
//     e.preventDefault();
  
    axios.post("http://localhost:5000/api/reserva", {
      nombre:  aux[0].Nombre,
      correo: aux[0].Correo,
      telefono: aux[0].Telefono,
      paquete: "Paquete Familiar"
    }).then((response) => {
      if (response.data.message) {
        // setReservationStatus(response.data.message);
      }else{
        // swal.fire({
        //     icon: 'success',
        //     text: 'Reserva exitosa',
        //     confirmButtonText: 'Cool'
        //   });
      }
    })
//   }
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
      <h3 className='precioCompra'>Valor a pagar: $1´100.000</h3>
      <button className='btnComprar' >Comprar paquete</button>
    </form>
  );
};


export const PaqueteFamiliar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

//   let Transaccion1 = transaction
//   let Colegio1 = chooseSchool
//   console.log(Transaccion1);
//   console.log(Colegio1);



  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);

  const navigate = useNavigate()
  const clickVolver = () =>{
    navigate('/HomeLogueado')
  }

  return (
      <div className="form-box-Reserva">
        <AiOutlineArrowLeft className='devolverHome' onClick={clickVolver}/>
            <h1 >¡Reserva aquí!</h1>
		<div className='formReserva'>  
            <div className='input-boxP'>               
                <label className='labelPerfil'>Nombre:<p className='pPerfil'>{aux[0].Nombre}</p></label>
            </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Correo:<p className='pPerfil'>{aux[0].Correo}</p> </label>
              </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Telefono:<p className='pPerfil'>{aux[0].Telefono}</p></label>
              </div>
              <div className='input-boxP'>
                <labe className='labelPerfil'l>Rol:<p className='pPerfil'>{aux[0].Rol}</p></labe>
              </div>
              <div className='input-boxP'>
                <labe className='labelPerfil'l>Paquete:<p className='pPerfil'>Paquete familiar</p></labe>
              </div>
              <button type='' className="btn-reservar" onClick={openModal}>Reservar</button>
        </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="reservaModal">
              <AiOutlineArrowLeft className='devolverModal' onClick={closeModal}/>
              <div className='Familiar'>
                <div className='divImgKit'>
                    <img className='imagenkit' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg" alt="" />
                </div>
                <div className='paqueteFamiliaLogueado'>
                    <h1 className='nombrekit'>Paquete Familiar</h1>
                    <p className='desckit'>Los mejores destinos para pasar en familia</p>
                <Elements stripe={stripePromise}>
                <CheckoutForm />
                </Elements>
                </div>
                </div>
              </Modal>
    </div>
  )
}