import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

export const HeaderSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef();

    const navigate = useNavigate()

    useEffect(() => {
        setActiveIndex(slideIndex);
    }, [slideIndex]);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setSlideIndex(index);
        // Reset animation
        const sliderContent = document.querySelector(".sliderContent");
        sliderContent.classList.remove("animate-slide");
        setTimeout(() => {
            sliderContent.classList.add("animate-slide");
        }, 50); // Adding a small delay to ensure animation restarts
    };

    // Function to move to the next slide
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    // Function to move to the previous slide
    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        afterChange: handleSlideChange, // Call handleSlideChange after each slide change
    };
    
    return (
        <div className="container">
            <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
                <div className="slide">
                    <img src={banner1} alt="" />
                    <div className="sliderContent">
                        <p>Get up to 50% off Today Only!</p>
                        <h1>Woman Fashion</h1>
                        <button className="btn" onClick={()=> navigate('/products')}>Shop Now</button>
                    </div>
                </div>
                
                <div className="slide">
                    <img src={banner2} alt="" />
                    <div className="sliderContent">
                        <p>50% off in all products</p>
                        <h1>Man Fashion</h1>
                        <button className="btn">Shop Now</button>
                    </div>
                </div>

                <div className="slide">
                    <img src={banner3} alt="" />
                    <div className="sliderContent">
                        <p>Taking your Viewing Experience to Next Level</p>
                        <h1>Summer Sale</h1>
                        <button className="btn">Shop Now</button>
                    </div>
                </div>
            </Slider>
            
            <IoIosArrowForward className="nextBtn" onClick={nextSlide} />
            <IoIosArrowBack className="prevBtn" onClick={previousSlide} />
        </div>
    );
}
