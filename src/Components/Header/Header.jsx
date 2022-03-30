import * as React from 'react';
import './Header.css'
import {Link } from 'react-router-dom'

const Header = () => {

  return (

  <div className='header'>
    <a href="#default" className='logo'>Microservices App</a>
    <div className="header-right">
      <Link to='/'>Products</Link>
      <Link to='/PurchaseProduct'>Purchase</Link>
      <Link to='/AddProduct'>Add Product</Link>
    </div>
</div>
  )
};
export default Header;
