import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CartContext } from './CartProvider';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState(1);
  const [total, setTotal] = useState(0);

  const isInCart = (obj) => cart.find((el) => el.item.id === obj.id);
  const addItem = (item, quantity) => {
    !isInCart(item) && setCart([...cart, { item, quantity }]);
    setTotal((prevState) => prevState + item.price * quantity);
  };
  const removeItem = (itemId) => {
    const removedItem = cart.find((cartItem) => cartItem.item.id === itemId);
    const filteredCart = cart.filter((itemCart) => itemCart.item.id !== itemId);
    setCart([...filteredCart]);
    setTotal((prevState) => prevState - removedItem.item.price * removedItem.quantity);
    toast.success('Item eliminado');
  };
  const updateQuantity = (quantity) => setSelectedItems(quantity);
  const clear = () => setCart([]);
  const getTotal = () => {
    const total = cart
      .map((cartEl) => Number(cartEl.item.price) * cartEl.quantity, 0)
      .reduce((curr, prev) => curr + prev, 0);
    setTotal(total);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, updateQuantity, selectedItems, cart, getTotal, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
