import React from 'react'
import eng from '../images/eng.png'
import fran from '../images/fn.png'
import us from '../images/eng.png'
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { IoShuffle } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export const Topbar = () => {
  return (
    <div className='topBar'>
      <ul className='eachPart'>
        <li className='leftSec'>
          <img src={eng} alt="" />
          <span className='elementHover'>English</span>
          <span className='arrowIcon'><IoIosArrowDown /></span>
            <ul className='dropdown countryDrop'>
              <li className='eachItem'>
                <img src={eng} alt="" />
                English
              </li>
              <li className='eachItem'>
                <img src={fran} alt="" />
                France
              </li>
              <li className='eachItem'>
                <img src={us} alt="" />
                United States
              </li>
            </ul>
        </li>

        <li className='leftSec'>
          <span className='elementHover'>USD</span>
          <span className='arrowIcon'><IoIosArrowDown /></span>
            <ul className='dropdown currencyDrop'>
              <li className='eachItem'>USD</li>
              <li className='eachItem'>EUR</li>
              <li className='eachItem'>GBR</li>
            </ul>
        </li>

        <li>
          <span className='phoneIcon'><FiPhone /></span>
          123-456-7890
        </li>
      </ul>

      <ul className='eachPart topBarHover'>
        <li>
          <span className='compareIcon'><IoShuffle /></span>
          Compare
        </li>

        <li>
          <span className='wishlistIcon'><IoMdHeartEmpty /></span>
          Wishlist
        </li>

        <li>
          <NavLink to="/login">
            <span className='loginIcon'><FaRegUser /></span>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
