import React from 'react'
import { CardsLugar } from '../../../../Desktop/components/ui/CardsLugar/CardsLugar'
import { UiCardLugar } from '../../../../Desktop/components/ui/UICardLugar/UiCardLugar'

export const CardsLugares = () => {
  return (
    <div className='containerCards1'>
        <div>
          <h1 className='titulolugares'>LUGARES A VISITAR</h1>
          <hr className='hrCardLugaresAVisitar'/>
        </div>
        <div className="containerCards">
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' content='Santa Marta' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443016/cartagena_mhqdmc.jpg' content='Cartagena' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443476/piscilago_m9tivm.jpg' content='Piscilago' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' content='Volcán del Totumo' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' content='Comuna 13 Medellin' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448884/cove%C3%B1as_xzp4zc.jpg' content='Coveñas' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448921/estadio_metropolitano_z6k8cu.jpg' content='Estadio Metropolitano de Barranquilla' style='Cardtitulociudad'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447768/imagen2_o1vimc.jpg' content='Piedra del peñol' style='Cardtitulociudad'/>
          <div>
            <UiCardLugar content='Conoce más sobre nuestros destinos' to='/Lugares'/>
          </div>
        </div>
    </div>
  )
}
