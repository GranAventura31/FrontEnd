import React from 'react'
import { Documento } from '../../../../Desktop/components/ui/Documento/Documento'
import { Kits } from '../../../../Desktop/components/ui/Kits/Kits'
import { Header } from '../../../../Desktop/components/layouts/Header/Header'

export const Contenido = () => {
  return (
    <div>
        <Header/>
        <Kits/> 
        <Documento/>
    </div>
  )
}
