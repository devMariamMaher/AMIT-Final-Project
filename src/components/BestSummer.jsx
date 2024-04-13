import React from 'react'
import img from "../images/tranding_img.png"
import { useNavigate } from 'react-router-dom'

export const BestSummer = () => {
  const navigate = useNavigate()

  return (
    <div className='bestSummerContainer'>
        <img src={img} alt="" />
        <div className="details">
            <h3>New season trends!</h3>
            <h1>Best Summer Collection</h1>
            <p>Sale Get up to 50% Off</p>
            <button className='btn' onClick={()=> navigate('/products')}>Shop Now</button>
        </div>
    </div>
  )
}



