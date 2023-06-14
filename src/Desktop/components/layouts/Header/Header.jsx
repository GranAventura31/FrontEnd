import React from 'react'
import { Navbar } from '../../../../Desktop/components/ui/Navbar/Navbar'
import { Nombre } from '../../../../Desktop/components/ui/Nombre/Nombre'

export const Header = () => {
  return (
    <header>
      <Nombre content='GranAventura' style='h1'/>
      <Navbar/>
    </header>
  )
}
