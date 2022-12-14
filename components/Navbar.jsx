import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const {qty} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Sound Waves - Headphones</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{qty}</span>
      </button>
    </div>
  )
}

export default Navbar