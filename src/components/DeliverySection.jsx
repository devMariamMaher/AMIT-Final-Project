import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

export const DeliverySection = () => {
  return (
    <div className='allServices'>
        <div className="eachServices">
            <div className="eachIcon">
                <span><TbTruckDelivery /></span>
            </div>

            <div className="details">
                <h3>Free Delivery</h3>
                <p>If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
        </div>
        
        <div className="eachServices">
            <div className="eachIcon">
                <span><BsArrowReturnLeft /></span>
            </div>

            <div className="details">
                <h3>30 Day Return</h3>
                <p>If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
        </div>

        <div className="eachServices">
            <div className="eachIcon">
                <span><RiCustomerService2Line /></span>
            </div>

            <div className="details">
                <h3>27/4 Support</h3>
                <p>If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
        </div>
    </div>
  )
}
