import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartProvider';
import { toast } from 'react-hot-toast';
import useFirebase from '../../hook/useFirebase';

const CartForm = () => {
  const [inputs, setInputs] = useState({});
  const { cart, clear, total } = useContext(CartContext);
  const { updateProduct } = useFirebase();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /* const order = {
    buyer: {
      email: 'email@gmail1.com',
      firstname: 'firstname1',
      lastname: 'lastname1',
    },
    itemsId: ['1'],
    total: 99,
  }; */

  const { sendOrder } = useFirebase();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Compra exitosa');
    const order = {
      buyer: inputs,
      itemId: cart.map((cartEl) => cartEl.item.id),
      total: total,
    };
    cart.forEach((cartItem) =>
      updateProduct(cartItem.item.id, cartItem.item.quantity - cartItem.quantity)
    );
    sendOrder(order.buyer, order.itemId, order.total);
    clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <strong>Total a pagar: ${total.toFixed(2)}</strong>
      <div className='mb-3'>
        <label htmlFor='emailField' className='form-label'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={inputs.email || ''}
          className='form-control'
          id='emailField'
          aria-describedby='emailHelp'
          onChange={handleChange}
        />
        <div id='emailHelp' className='form-text'></div>
      </div>
      <div className='mb-3'>
        <label htmlFor='firstnameField' className='form-label'>
          Nombre
        </label>
        <input
          type='text'
          name='firstname'
          value={inputs.firstname || ''}
          className='form-control'
          id='firstnameField'
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='lastnameField' className='form-label'>
          Apellido
        </label>
        <input
          type='text'
          name='lastname'
          value={inputs.lastname || ''}
          className='form-control'
          id='lastnameField'
          onChange={handleChange}
        />
      </div>
      <div className='row g-2'>
        <button type='submit' className='btn btn-danger' onClick={clear}>
          Eliminar carrito
        </button>
        <button className='btn btn-outline-primary'>Comprar</button>
      </div>
      <div className='row g-2 mt-4'>
        <button className='btn btn-outline-secondary' onClick={routeChange}>
          Seguir comprando
        </button>
      </div>
    </form>
  );
};

export default CartForm;
