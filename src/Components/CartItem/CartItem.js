import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';

const CartItem = ({ id, title, price, image, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={image} className='' alt='...' width={50} height={'auto'} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>Precio por unidad: ${price}</p>
        <p className='card-text'>Cantidad: {quantity}</p>
        <button className='btn btn-danger' onClick={() => removeItem(id)}>
          Quitar del carrito
        </button>
      </div>
    </div>
  );
};

export default CartItem;
