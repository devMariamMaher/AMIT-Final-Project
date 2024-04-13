import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { axiosConfig } from '../axios/axiosConfig';
import { Card } from "./Card";


export const FeaturedProducts = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef();

    
    useEffect(() => {
        setActiveIndex(slideIndex);
    }, [slideIndex]);
    
    const handleSlideChange = (index) => {
        setSlideIndex(index);
    };
    
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };
    
    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const [products, setProducts] = useState([])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: products.length > 0 ? Math.min(products.length, 4) : 1,
        slidesToScroll: products.length > 0 ? Math.min(products.length, 4) : 1,
        afterChange: handleSlideChange,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: products.length > 0 ? Math.min(products.length, 3) : 1,
                    slidesToScroll: products.length > 0 ? Math.min(products.length, 3) : 1,
                    afterChange: handleSlideChange,
                }
            },
            
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: products.length > 0 ? Math.min(products.length, 1) : 1,
                    slidesToScroll: products.length > 0 ? Math.min(products.length, 1) : 1,
                    afterChange: handleSlideChange,
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
        <div className="featuredProducts">
            <h1>Featured Products</h1>
            
            <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
                {products.map((product, index)=>(
                    <Card key={index} data={product}/>
                ))}
            </Slider>
            
            <IoIosArrowForward className="nextBtn" onClick={nextSlide} />
            <IoIosArrowBack className="prevBtn" onClick={previousSlide} />
        </div>
    );
}
