import React from 'react'
import {Link} from 'react-router-dom'

export const Reserva = () => {
  return (
    <div>
      <div className='Reserva'>
          <Link className='tituloReserva'to='/Login'><h1>¡Inicia sesion para poder resevar!</h1></Link>
      </div>
    </div>
  )
}
