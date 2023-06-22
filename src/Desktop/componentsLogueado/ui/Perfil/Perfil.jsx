import React,{useState} from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BsTelephoneXFill } from 'react-icons/bs';
import Axios from 'axios';
import swal from 'sweetalert2';
import Modal from 'react-modal'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header';
import { BsPencilSquare } from 'react-icons/bs'

export const Perfil = () => {
	

const [modalIsOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null); // Variable de estado para almacenar los datos del usuario

  const openModal = (e) => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);


	const alertaCampos = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [contrasena, setContrasena] = useState("");
const [telefono, setTelefono] = useState("");
// const [CorreoActual, setCorreoActual] = useState("");
const actualizarNombre = (e) => {
  e.preventDefault();
  if (nombre === '' ) {
    swal.fire({
      icon: 'error',
      text: 'El campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  } else {
    Axios.post("http://localhost:5000/api/ActualizarNombre", {
      Nombre: nombre,
      CorreoActual: aux[0].Correo
    }).then((response) => {
      if (response.status === 200) {
        swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Nombre actualizado exitosamente'
        });
      }
    }).catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: ''
      });
      console.log(error);
    });
  }
};
const actualizarCorreo = (e) => {
  e.preventDefault();
  if (correo === '') {
    swal.fire({
      icon: 'error',
      text: 'El campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  } else {
    Axios.post("http://localhost:5000/api/ActualizarCorreo", {
      
      correo: correo,
      CorreoActual: aux[0].Correo
    }).then((response) => {
      if (response.status === 200) {
        swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Correo actualizado exitosamente'
        });
      }
    }).catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: ''
      });
      console.log(error);
    });
  }
};
const actualizarContrasena = (e) => {
  e.preventDefault();
  if ( contrasena === '') {
    swal.fire({
      icon: 'error',
      text: 'El campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  } else {
    Axios.post("http://localhost:5000/api/ActualizarContrasena", {
      contrasena: contrasena,
      CorreoActual: aux[0].Correo
    }).then((response) => {
      if (response.status === 200) {
        swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Contraseña actualizado exitosamente'
        });
      }
    }).catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: ''
      });
      console.log(error);
    });
  }
};
const actualizarTelefono = (e) => {
  e.preventDefault();
  if (nombre === '' || correo === '' || contrasena === '' || telefono === '') {
    swal.fire({
      icon: 'error',
      text: 'El campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  } else {
    Axios.post("http://localhost:5000/api/ActualizarTelefono", {
      telefono: telefono,
      CorreoActual: aux[0].Correo
    }).then((response) => {
      if (response.status === 200) {
        swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Telefono actualizado exitosamente'
        });
      }
    }).catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: ''
      });
      console.log(error);
    });
  }
};

return (
<div>
    <Header/>
    <h2 className='tituloperfil'>Perfil</h2>
  <div className="muestraPerfil">
		<div className='formPerfil'>  
            <div className='input-boxP'>               
                <label className='labelPerfil'>Nombre:<p className='pPerfil'>{aux[0].Nombre}</p></label>
            </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Correo:<p className='pPerfil'>{aux[0].Correo}</p> </label>
              </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Telefono:<p className='pPerfil'>{aux[0].Telefono}</p></label>
              </div>
              <div className='input-boxP'>
                <labe className='labelPerfil'l>Rol:<p className='pPerfil'>{aux[0].Rol}</p></labe>
              </div>
              <button type='submit' className="btn-editar" onClick={openModal}> Editar </button>
		</div>
		<Modal className='actualizarPerfil' isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal">
				<form action="#" >
            <div className='input-boxPP'>
                <span className='icon'>
                  <FaUserCircle/>
                </span>
                <input type="text" name='nombre' onChange={(e) => {setNombre(e.target.value)}} required/>
                <label>Nombre y Apellido</label>
            </div>
                <button onClick={actualizarNombre} className="btn-editarComponentes1">Actualizar Nombre</button>
              <div className='input-boxPP'>
                <span className='icon'>
                <MdEmail />
                </span>
                <input type="email"  name='correo' onChange={(e) => {setCorreo(e.target.value)}} required/>
                <label>Correo</label>
              </div>
                <button onClick={actualizarCorreo} className="btn-editarComponentes">Actualizar Corrreo</button>
              <div className='input-boxPP'>
                <span className='icon'>
                <RiLockPasswordFill/>
                </span>
                <input type="password" name='contrasena' onChange={(e) => {setContrasena(e.target.value)}} required/>
                <label>Contraseña</label>
              </div>
                <button onClick={actualizarContrasena} className="btn-editarComponentes">Actualizar Contraseña</button>
              <div className='input-boxPP'>
                <span className='icon'>
                <BsTelephoneXFill/>
                </span>
                <input type="number" name='telefono' onChange={(e) => {setTelefono(e.target.value)}} required/>
                <label>Telefono</label>
              </div>
                <button onClick={actualizarTelefono} className="btn-editarComponentes">Actualizar Telefono</button>
              
            </form>
			</Modal>
	</div>
  </div>
  )
}
