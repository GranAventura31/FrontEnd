import React,{ useState } from 'react'
import { Link }  from 'react-router-dom'
import { MenuHamburguesa } from '../../../../Desktop/componentsLogueado/ui/MenuHamburguesa/MenuHamburguesa'
import { BsPersonFill } from 'react-icons/bs'
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [modalIsOpen, setIsOpen ] = useState(false);

  const openModal = (e) => {
      setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }  

  const navigate = useNavigate();

  const alertaSesion = () =>{
    Swal.fire({
      icon: 'success',
      text: 'Se cerro sesion exitosamente',
      confirmButtonText: 'OK',
    })
    navigate('/')
  }
  return (
    <nav className='navbar'>
        <div>
        <Link className='link' to='/HomeLogueado'>Página de inicio</Link>
        <Link className='link' to='/contenidoLogueado'>Contenido</Link>
        <Link className='link' to='/SobreNosotrosLogueado'>Sobre Nosotros</Link>
        <BsPersonFill onClick={openModal} className='iconPerfil'/>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="modalPerfil">
              <IoClose onClick={closeModal} className='closeModalPerfil'/> 
              <div className="perfil">
                <div className="perfilItem1">Perfil</div>
                <div className="perfilItem" onClick={alertaSesion}>Cerrar Sesión</div>
              </div>
            </Modal>
        </div>
        <MenuHamburguesa/>
    </nav>
  )
}
