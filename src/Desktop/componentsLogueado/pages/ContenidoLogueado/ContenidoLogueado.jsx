import React from 'react'
import { Documento } from '../../../../Desktop/componentsLogueado/ui/Documento/Documento'
import { Kits } from '../../../../Desktop/componentsLogueado/ui/Kits/Kits'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'

export const ContenidoLogueado = () => {
  return (
    <div>
        <Header/>
        <Kits/> 
        <Documento/>
    </div>
  )
}
