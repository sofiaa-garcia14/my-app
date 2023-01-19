import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CartContext } from './CartProvider';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState(1);

  const isInCart = (obj) => cart.find((el) => el.item.id === obj.id);
  const addItem = (item, quantity) => !isInCart(item) && setCart([...cart, { item, quantity }]);
  const removeItem = (itemId) => {
    const filteredCart = cart.filter((itemCart) => itemCart.item.id !== itemId);
    setCart([...filteredCart]);
    toast.success('Item eliminado');
  };
  const updateQuantity = (quantity) => setSelectedItems(quantity);
  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, updateQuantity, selectedItems, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
