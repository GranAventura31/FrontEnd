import React from 'react'
import swal from 'sweetalert2';


export const Documentos = () => {

  const openAlert = () =>{
    swal.fire({
      icon: 'error',
      text: 'Por favor inicie sesion',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }
  
  return (
    <div className='documentos'>
        <div className='descargas'>
            <h2 className='titulospermiso'>Permisos de menores de edad</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
        <div className='descargas'>
            <h2 className='titulopermiso'>Permisos de registraduría</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
    </div>
  )
}
