import React from 'react'
import { CardsLugar } from '../../../../Mobile/Components/ui/CardsLugar/CardsLugar'
import { UiCardLugar } from '../../../../Mobile/Components/ui/UICardLugar/UiCardLugar'

export const CardsLugares = () => {
  return (
    <div className='containerCardsMobile'>
        <div>
          <h1 className='titulolugaresCard'>LUGARES A VISITAR</h1>
          <hr className='hrCardLugaresAVisitarM'/>
        </div>
        <div className="containerCardsM">
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' content='Santa Marta' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443016/cartagena_mhqdmc.jpg' content='Cartagena' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443476/piscilago_m9tivm.jpg' content='Piscilago' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' content='Volcán del Totumo' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' content='Comuna 13 Medellin' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448884/cove%C3%B1as_xzp4zc.jpg' content='Coveñas' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448921/estadio_metropolitano_z6k8cu.jpg' content='Estadio Metropolitano de Barranquilla' style='CardtitulociudadM'/>
        <CardsLugar img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447768/imagen2_o1vimc.jpg' content='Piedra del peñol' style='CardtitulociudadM'/>
        <UiCardLugar content='Conoce más sobre nuestros destinos' to='/Lugares'/>
        </div>
    </div>
  )
}
