import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

export const BreadCrumb = ({text}) => {
  return (
    <div className='breadcrumb'>
        <h1>{text}</h1>
        <div className="breadcrumbPages">
            <span className='homePageLink'><Link to="/">Home</Link> <MdOutlineKeyboardArrowRight className='breadcrumbArrow'/></span>
            <span className='currentPage'>{text}</span>
        </div>
    </div>
  )
}
