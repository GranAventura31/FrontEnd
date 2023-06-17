import React,{ useState, useEffect } from 'react'
import { json, Link }  from 'react-router-dom'
import { MenuHamburguesa } from '../../../../Desktop/componentsLogueado/ui/MenuHamburguesa/MenuHamburguesa'
import { BsPersonFill } from 'react-icons/bs'
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { MdOutlineExitToApp } from 'react-icons/md'
import Axios from 'axios'

export const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null); // Variable de estado para almacenar los datos del usuario

  const openModal = (e) => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  const alertaSesion = () => {
    Swal.fire({
      icon: 'success',
      text: 'Se cerró la sesión exitosamente',
      confirmButtonText: 'OK',
    })
    navigate('/')
  }

  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);
  console.log(aux[0].Nombre);

  return (
    <nav className='navbarLogueado'>
      <div className='niko'>
        <Link className='link' to='/HomeLogueado'>Página de inicio</Link>
        <Link className='link' to='/contenidoLogueado'>Contenido</Link>
        <Link className='link' to='/SobreNosotrosLogueado'>Sobre Nosotros</Link>
        <div>
        <BsPersonFill onClick={openModal} className='iconPerfil' />
        <p className='pPerfil'>{aux[0].Nombre}</p>
        </div>
        <MdOutlineExitToApp onclick={alertaSesion}/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modalPerfil">
          <IoClose onClick={closeModal} className='closeModalPerfil' />
          <div className="perfil">
            <div className="perfilItem1">Perfil</div>
            <div className="perfilItem" onClick={alertaSesion}>Cerrar Sesión</div>
          </div>
        </Modal>
      </div>
      <MenuHamburguesa />
    </nav>
  )
}

// export const Navbar = () => {
//   const [modalIsOpen, setIsOpen ] = useState(false);

//   const openModal = (e) => {
//       setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }  

//   const navigate = useNavigate();

//   const alertaSesion = () =>{
//     Swal.fire({
//       icon: 'success',
//       text: 'Se cerro sesion exitosamente',
//       confirmButtonText: 'OK',
//     })
//     navigate('/')
//   }

//   return (
//     <nav className='navbarLogueado'>
//         <div>
//         <Link className='link' to='/HomeLogueado'>Página de inicio</Link>
//         <Link className='link' to='/contenidoLogueado'>Contenido</Link>
//         <Link className='link' to='/SobreNosotrosLogueado'>Sobre Nosotros</Link>
//         <BsPersonFill onClick={openModal} className='iconPerfil'/>
//         <p></p>
//         <Modal isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             contentLabel="Example Modal" 
//             className="modalPerfil">
//               <IoClose onClick={closeModal} className='closeModalPerfil'/> 
//               <div className="perfil">
//                 <div className="perfilItem1">Perfil</div>
//                 <div className="perfilItem" onClick={alertaSesion}>Cerrar Sesión</div>
//               </div>
//             </Modal>
//         </div>
//         <MenuHamburguesa/>
//     </nav>
//   )
// }
