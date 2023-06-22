import React from 'react'
import Modal from 'react-modal'
import { BsPencilSquare } from 'react-icons/bs'

export const EditarNombre = () => {
const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);
  return (
	<div>
		<div className='input-boxP'>               
            <label className='labelPerfil'>Nombre:<p className='pPerfil'>{aux[0].Nombre}</p></label>
            <BsPencilSquare className='iconEditarPerfil' onClick={openModal}/>
        </div>
		<Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
			className="editarNombre"
			>
				<label className='labelPerfil'>Nombre</label>
				<input type="text" className="pPerfil"/>
			</Modal>
	</div>
  )
}
