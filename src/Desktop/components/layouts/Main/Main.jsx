import React from 'react'
import { Inicio } from '../../../../Desktop/components/ui/Inicio/Inicio'
import { Personal } from '../../../../Desktop/components/ui/Personal/Personal'
import { CardsLugares } from '../../../../Desktop/components/ui/CardsLugares/CardsLugares'
import { Testimonioss } from '../../../../Desktop/components/ui/Testimonioss/Testimonioss'
import { RESERVAR } from '../../../../Desktop/components/ui/RESERVAR/RESERVAR'



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