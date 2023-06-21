import React from 'react'
import { Reserva } from '../../../../Desktop/componentsLogueado/ui/Reserva/Reserva'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'
export const Reservarpaquete = () => {
  return (
    <div>
        <Header/>
        <h1 className='h1ReservarPaquete'>Reservar paquetes</h1>
        <Reserva/>
    </div>
  )
}
