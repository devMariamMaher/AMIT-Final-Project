import React, { useContext } from 'react'
import { BsCartPlus } from "react-icons/bs";
import { IoShuffle } from "react-icons/io5";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { CartContext } from '../hooks/CartContext';
import { Link } from 'react-router-dom';
import { axiosConfig } from '../axios/axiosConfig';
import {toast} from "react-hot-toast";

export const Card = ({data}) => {
  const { counter, setCounter } = useContext(CartContext)

  async function handelCart(id){
    const {data} = await axiosConfig({
      url:`/products/${id}`,
    })
    addToCart(data)
  }

  async function addToCart(result){
    try{
      const {data} = await axiosConfig({
        url: "/cart",
        method: "POST",
        data: result,
      })
      toast.success("Product has been added")
      setCounter(prevCounter => prevCounter + 1)
    }catch(err){
      toast.error(err.message)
    }
  }

  return (
      <div className="product">
        <img src={data.img} alt="" />

        <div className="productContent">
          <Link to={`/product-details/${data.id}`}>
            <h3>{data.title}</h3>
          </Link>
          <span className="currentPrice">${data.currentPrice}</span>
          <span className="oldPrice">${data.oldPrice}</span>
          <span className="discount">{data.discount}% Off</span>
          <p>rating: <span>{data.rating}/5</span></p>
        </div>

        <div className="productIcons">
          <span className="eachIcon" onClick={()=> {handelCart(data.id)}}><BsCartPlus/></span>
          <span className="eachIcon"><IoShuffle/></span>
          <span className="eachIcon"><PiMagnifyingGlassPlus/></span>
          <span className="eachIcon"><IoMdHeartEmpty/></span>
        </div>
      </div>
)
}
