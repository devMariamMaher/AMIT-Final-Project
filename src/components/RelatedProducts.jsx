import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosConfig } from '../axios/axiosConfig';
import { Card } from "./Card";

export const RelatedProducts = () => {    
    const [products, setProducts] = useState([])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: products.length > 0 ? Math.min(products.length, 4) : 1,
        slidesToScroll: products.length > 0 ? Math.min(products.length, 4) : 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: products.length > 0 ? Math.min(products.length, 3) : 1,
                    slidesToScroll: products.length > 0 ? Math.min(products.length, 3) : 1,
                infinite: false,
                dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: products.length > 0 ? Math.min(products.length, 1) : 1,
                    slidesToScroll: products.length > 0 ? Math.min(products.length, 1) : 1,
                }
            }
        ]
    };

    async function getAllProducts(){
        const {data} = await axiosConfig({
            url: "/featuredProductsSlider",
        })
        setProducts(data)
    }

    useEffect(()=>{
        getAllProducts()
    }, [])
    
    return (
        <div className="relatedProducts">
            <h1>Related Products</h1>
            
            <Slider {...settings}>
                {products.map((product, index)=>(
                    <Card key={index} data={product}/>
                ))}
            </Slider>
        </div>
    );
}
