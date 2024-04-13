import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../images/user_img1.jpg";
import user2 from "../images/user_img2.jpg";
import user3 from "../images/user_img3.jpg";
import user4 from "../images/user_img4.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Reviews = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef();
    
    useEffect(() => {
        setActiveIndex(slideIndex);
    }, [slideIndex]);
    
    // Function to handle slide change
    const handleSlideChange = (index) => {
        setSlideIndex(index);
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
        autoplaySpeed: 6000,
        afterChange: handleSlideChange, // Call handleSlideChange after each slide change
    };
    
    return (
        <div className="reviewsContainer">
            <h1>Our Client Say!</h1>
            <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
                <div className="eachSlide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    <div className="user">
                        <img src={user1} alt="" />
                        <div className="userDetails">
                            <h4>Lissa Castro</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
                
                <div className="eachSlide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    <div className="user">
                        <img src={user2} alt="" />
                        <div className="userDetails">
                            <h4>Alden Smith</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
                
                <div className="eachSlide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    <div className="user">
                        <img src={user3} alt="" />
                        <div className="userDetails">
                            <h4>Daisy Lana</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
                
                <div className="eachSlide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    <div className="user">
                        <img src={user4} alt="" />
                        <div className="userDetails">
                            <h4>John Becker</h4>
                            <span>Designer</span>
                        </div>
                    </div>
                </div>
                
            </Slider>
            
            <IoIosArrowForward className="nextBtn" onClick={nextSlide} />
            <IoIosArrowBack className="prevBtn" onClick={previousSlide} />
        </div>
    );
}
