import React, { useState, useEffect } from "react";
import { BsCart4 } from 'react-icons/bs';
import Modal from 'react-modal'
import { Link }  from 'react-router-dom'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

export const CarritoCompras = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([0]);
    const navigate = useNavigate();
    const clickComprar = () =>{
      if (totalPrice === 0) {
        swal.fire({
          icon: 'error',
          text: 'No hay productos en el carrito',
          confirmButtonText: 'Cool'
        });
      }else{
        navigate('/kit');
      }
    }
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    }, []);
  
    // Actualizar el almacenamiento local cuando los elementos del carrito cambien
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
  
    // Calcular y guardar el precio total en el almacenamiento local cuando los elementos del carrito cambien
    useEffect(() => {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem('totalPrice', JSON.stringify(total));
    }, [cartItems]);

  const addToCart = (item) => {
      const updateCart=([...cartItems, { ...item, quantity: 1 }]);
     setCartItems(updateCart);
    updateTotalPrice(updateCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem === item) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem === item && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  };
  const handleBuy = () => {
    alert(`Total de la compra: $${totalPrice.toFixed(2)}`);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const Navigate = useNavigate()
  const clickVolver = () =>{
    navigate('/HomeLogueado')
  }

  return (
    <div className="container">

      <BsCart4 className="iconCarrito" onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modalCompra"
      >
        <AiOutlineArrowLeft className='devolverHome' onClick={closeModal}/>
      <ul className="cartList">
        {cartItems.map((item, index) => (
          <li key={index} className="cartItem">
            <img src={item.image} alt="Product" className="productImage" />
            <div className="productInfo">
              <span className="productName">{item.name}</span>
              <span className="productPrice">${item.price.toFixed(2)}</span>
              <span className="productQuantity">Cantidad: {item.quantity}</span>
            </div>
            <div className="quantityControls">
              <button
                className="quantityButton"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="quantityButton"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
            </div>
            <button
              className="deleteButton"
              onClick={() => removeFromCart(item)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

            
      <div className="totalPrice">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
        
      <button className="buyButton" onClick={clickComprar}>Comprar</button>
      <button className="clearButton" onClick={emptyCart}>
        Vaciar carrito
      </button>
      </Modal>

      <div className="DivProductos">
      <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682022987/niko/pintucaritas_camabx.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Pintucaritas', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682022987/niko/pintucaritas_camabx.webp', price: 28.700 })}>
              Pintucaritas ($28.700)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src='https://res.cloudinary.com/dlohqvzri/image/upload/v1683224453/niko/camisas_neon_lk9cb1.jpg' alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Camisetas Neón', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224453/niko/camisas_neon_lk9cb1.jpg', price: 60.900 })}>
              Camisetas Neón ($60.900)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682367695/niko/camisasuperheroe_fyujnq.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Camisetas Super Heroes', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682367695/niko/camisasuperheroe_fyujnq.webp', price: 50.000 })}>
              Camisetas Super Heroes ($50.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368483/niko/espuma_y3z0jg.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Espumas', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368483/niko/espuma_y3z0jg.webp', price: 25.000 })}>
              Espumas ($25.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683224534/niko/barras_neon_hvawbo.jpg" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Barritas Led', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224534/niko/barras_neon_hvawbo.jpg', price: 15.000 })}>
              Barritas Led ($15.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368613/niko/collar_akm7wh.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Collar Hawaiano', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368613/niko/collar_akm7wh.webp', price: 10.000 })}>
              Collar Hawaiano ($10.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683224456/niko/tula_led_p6znua.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Tula Gran Aventura', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1683224456/niko/tula_led_p6znua.webp', price: 20.000 })}>
              Tula Gran Aventura ($20.000)
            </button>
          </section>
        </div>
        <div className="producto">
          <section className="imgProducto">
            <img className="imagenpersona" src="https://res.cloudinary.com/dlohqvzri/image/upload/v1682368267/niko/gorras_baandn.webp" alt="" />
          </section>
          <section>
            <hr className="hrProductoKit" />
            <button
              className="addButton"
              onClick={() => addToCart({ name: 'Gorras Gran Aventura', image: 'https://res.cloudinary.com/dlohqvzri/image/upload/v1682368267/niko/gorras_baandn.webp', price: 35.000 })}>
              Gorras Gran Aventura ($35.000)
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { BsCart4 } from 'react-icons/bs';
// import Modal from 'react-modal';
// import { Link } from 'react-router-dom';
// import swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

// export const CarritoCompras = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const navigate = useNavigate();
//   const [modalIsOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
//     if (storedCartItems) {
//       setCartItems(storedCartItems);
//     }
//   }, []);

//   // Actualizar el almacenamiento local cuando los elementos del carrito cambien
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Calcular y guardar el precio total en el almacenamiento local cuando los elementos del carrito cambien
//   useEffect(() => {
//     const total = cartItems.reduce((acc, item) => {
//       return acc + item.price * item.quantity;
//     }, 0);
//     setTotalPrice(total);
//     localStorage.setItem('totalPrice', JSON.stringify(total));
//   }, [cartItems]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
//     if (existingItem) {
//       const updatedCart = cartItems.map((cartItem) => {
//         if (cartItem.name === item.name) {
//           return { ...cartItem, quantity: cartItem.quantity + 1 };
//         }
//         return cartItem;
//       });
//       setCartItems(updatedCart);
//     } else {
//       const updatedCart = [...cartItems, { ...item, quantity: 1 }];
//       setCartItems(updatedCart);
//     }
//   };

//   const removeFromCart = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
//     setCartItems(updatedCart);
//   };

//   const increaseQuantity = (item) => {
//     const updatedCart = cartItems.map((cartItem) => {
//       if (cartItem === item) {
//         return { ...cartItem, quantity: cartItem.quantity + 1 };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCart);
//   };

//   const decreaseQuantity = (item) => {
//     const updatedCart = cartItems.map((cartItem) => {
//       if (cartItem === item && cartItem.quantity > 1) {
//         return { ...cartItem, quantity: cartItem.quantity - 1 };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCart);
//   };

//   const clickComprar = () => {
//     if (totalPrice === 0) {
//       swal.fire({
//         icon: 'error',
//         text: 'No hay productos en el carrito',
//         confirmButtonText: 'Cool'
//       });
//     } else {
//       navigate('/kit');
//     }
//   };

//   const emptyCart = () => {
//     setCartItems([]);
//   };

//   const handleBuy = () => {
//     alert(`Total de la compra: $${totalPrice.toFixed(2)}`);
//   };

//   const clickVolver = () => {
//     navigate('/HomeLogueado');
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <h2>Carrito de compras</h2>
//       <button onClick={clickVolver}>
//         <AiOutlineArrowLeft /> Volver al inicio
//       </button>
//       <br />
//       <br />
//       <div className="cart-items">
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <h3>{item.name}</h3>
//             <p>Precio: ${item.price.toFixed(2)}</p>
//             <p>Cantidad: {item.quantity}</p>
//             <button onClick={() => increaseQuantity(item)}>+</button>
//             <button onClick={() => decreaseQuantity(item)}>-</button>
//             <button onClick={() => removeFromCart(item)}>Eliminar</button>
//           </div>
//         ))}
//       </div>
//       {cartItems.length > 0 && (
//         <div>
//           <p>Total: ${totalPrice.toFixed(2)}</p>
//           <button onClick={handleBuy}>Comprar</button>
//           <button onClick={emptyCart}>Vaciar carrito</button>
//         </div>
//       )}
//     </div>
//   );
// };
