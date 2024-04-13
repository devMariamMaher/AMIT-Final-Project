import React, { useContext, useEffect } from 'react'
import logo from "../images/logo_dark.png"
import { Link, NavLink } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { CartContext } from '../hooks/CartContext';
import { axiosConfig } from '../axios/axiosConfig';
import {toast} from "react-hot-toast";
import { fetchCartItems } from '../hooks/CartUtility';

export const Navbar = () => {
  const { counter, setCounter } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const [lastCartItemCount, setLastCartItemCount] = useState(0);

  async function fetchCartItems() {
    try {
      const { data } = await axiosConfig({
        url: '/cart'
      });
      setCounter(data.length);
      setLastCartItemCount(data.length);
    } catch (error) {
      toast.error('Error fetching cart items:');
    }
  }

  useEffect(() => {
    fetchCartItems(setCounter);
  }, [setCounter]);

  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>

      <div className={`links ${menuOpen ? 'menuOpen' : ''}`}>
          <ul>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="">Home <IoIosArrowDown className='navArrowIcon'/></NavLink></li>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/pages">Pages <IoIosArrowDown className='navArrowIcon'/></NavLink></li>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/products">Products <IoIosArrowDown className='navArrowIcon'/></NavLink></li>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/blog">Blog <IoIosArrowDown className='navArrowIcon'/></NavLink></li>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/shop">Shop <IoIosArrowDown className='navArrowIcon'/></NavLink></li>
            <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/contact-us">Contact Us</NavLink></li>
          </ul>

        <div className="navIcons">
          <NavLink><GoSearch className='eachIcon'/></NavLink>
          <NavLink to="/cart">
            <HiOutlineShoppingCart className='eachIcon'/>
            <span>{counter}</span>
          </NavLink>
          <div className="menuIcon">
            <label htmlFor="menu">{menuOpen ? <IoMdClose/> : <IoMdMenu/>}</label>
            <input type="checkbox" id="menu" onChange={handleMenuToggle} />
          </div>        
        </div>
      </div>
    </nav>
  )
}
