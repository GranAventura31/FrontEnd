import React from 'react'
import { Inicio } from '../../../../Desktop/componentsLogueado/ui/Inicio/Inicio'
import { Personal } from '../../../../Desktop/componentsLogueado/ui/Personal/Personal'
import { CardsLugares } from '../../../../Desktop/componentsLogueado/ui/CardsLugares/CardsLugares'
import { Testimonioss } from '../../../../Desktop/componentsLogueado/ui/Testimonioss/Testimonioss'
import { RESERVAR } from '../../../../Desktop/componentsLogueado/ui/RESERVAR/RESERVAR'


export const Main = () => {
  return (
    <main>
        <Inicio />
        <CardsLugares/>
        <Testimonioss/>
        <RESERVAR/>
        <Personal/>
    </main>
  )
}