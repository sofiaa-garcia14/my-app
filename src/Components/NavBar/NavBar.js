import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const setLinkColor = ({ isActive }) => (isActive ? { color: 'black' } : { color: '#0000008c' });

  return (
    <nav className='navbar navbar-expand-lg bg-light p-3 mb-5'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='/'>
          Brand - Store
        </a>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' aria-current='page' to={'/'}>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' to={"/category/men's clothing"}>
                Ropa para hombres
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' to={"/category/women's clothing"}>
                Ropa para mujeres
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
