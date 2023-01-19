import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:id' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
