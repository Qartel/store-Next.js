import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <img className='main-logo' src='./images/lollipop.png'/>

      <div className='navbar-header'>
      <button type="button" className="wish-icon" onClick='{}'>
        <AiOutlineHeart />
      </button>

      <button type="button" className="account-icon" onClick='{}'>
        <AiOutlineUser />
      </button>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar