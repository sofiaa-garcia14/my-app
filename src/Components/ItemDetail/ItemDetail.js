import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../Context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';
import './styles.css';

const ItemDetail = ({ product }) => {
  const { title, description, price, image, quantity } = product;
  const { addItem, selectedItems, updateQuantity } = useContext(CartContext);
  let location = useLocation();

  React.useEffect(() => {
    updateQuantity(1);
  }, [location]);

  return (
    <div className='details__container'>
      <div className='details__wrapper'>
        <div className='product__picture col-4'>
          <img src={image} alt='product_picture' width={250} height={'auto'} />
        </div>
        <div className='product__info col-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{description}</p>
              <p className='card-text'>Stock: {quantity}</p>
              <p>${price}</p>
            </div>
            <ItemCount stock={quantity} />
            <button
              id='add-chart-button'
              className='btn btn-outline-dark'
              onClick={() => addItem(product, selectedItems)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
