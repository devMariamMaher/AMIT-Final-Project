import React from 'react'
import popupImage from '../images/popup_img.jpg'
import { HiXMark } from "react-icons/hi2";
export const Popup = () => {
  return (
        <div className="popup">
            
            <div className="popupImg">
                <img src={popupImage} alt="" />
            </div>
            
            <div className="popupInfo">
                <h2>Subscribe And Get 25% Discount!</h2>
                <p className="popup-message">
                    Subscribe to the newsletter to receive updates about new products.
                </p>
                <input type="email" className='emailInput' placeholder='Enter Your Email' /><br />
                <button className="popupBtn btn">Subscribe</button>

                <div className="dontShow">
                    <input type="checkbox" id='dontShow-message'/>
                    <label htmlFor="dontShow-message">Don't show this popup again</label>
                </div>
            </div>
            
            <span><HiXMark /></span>
        </div>
    );
}
