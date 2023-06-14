import React from 'react'
import { Reserva } from '../../../../Desktop/components/ui/Reserva/Reserva'



export const RESERVAR = () => {
  return (
    <div className='Reserva1'>
        <div className='Reserva'>
        <h1 className='tituloReserva'>Reservar</h1>
        <hr className='HrReserva'/>
        </div>
        <div>
          <Reserva/>
        </div>
    </div>
  )
}