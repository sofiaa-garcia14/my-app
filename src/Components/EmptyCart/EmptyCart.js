import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  }, []);

  return <p>El carrito está vacío 🫤. Está siendo redirigido al inicio...</p>;
};

export default EmptyCart;
