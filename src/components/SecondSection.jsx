import React from 'react'
import shoppingBanner1 from "../images/shop_banner_img1.jpg"
import shoppingBanner2 from "../images/shop_banner_img2.jpg"
import { NavLink } from 'react-router-dom'

export const SecondSection = () => {
  return (
    <div className='allSections'>
        <div className="eachSection">
            <div className="hoverDev">
                <img src={shoppingBanner1} alt="" />

                <div className="sectionDetails">
                    <h3>Super Sale</h3>
                    <h1>New Collection</h1>
                    <span><NavLink>Shop Now</NavLink></span>
                </div>
            </div>
        </div>

        <div className="eachSection">
            <div className="hoverDev">
                <img src={shoppingBanner2} alt="" />

                <div className="sectionDetails">
                    <h1>New Season</h1>
                    <h2>Sale 40% Off</h2>
                    <span><NavLink>Shop Now</NavLink></span>
                </div>
            </div>
        </div>
    </div>
  )
}
