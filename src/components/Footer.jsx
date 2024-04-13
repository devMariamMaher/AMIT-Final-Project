import React from 'react'
import footerLogo from "../images/logo_light.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import visaCard from "../images/visa.png"
import discoverCard from "../images/discover.png"
import masterCard from "../images/master_card.png"
import paypalCard from "../images/paypal.png"
import amexepCard from "../images/amarican_express.png"
import { PiCopyrightBold } from "react-icons/pi";
import { IoMdPin } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerContent ">
          <div className="footerDetails">
            <img src={footerLogo} alt="" />
            <p className='footerAbout'>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
          </div>

          <div className="allMediaIcons">
            <span className='mediaIcons'><FaFacebookF /></span>
            <span className='mediaIcons'><FaXTwitter /></span>
            <span className='mediaIcons'><TfiGoogle /></span>
            <span className='mediaIcons'><IoLogoYoutube /></span>
            <span className='mediaIcons'><FaInstagram /></span>
          </div>
        </div>

        <div className="footerContent">
          <h4>Useful Links</h4>
          <ul className="footerList">
            <li><Link>About Us</Link></li>
            <li><Link>FAQ</Link></li>
            <li><Link>Location</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>

        <div className="footerContent">
          <h4>Category</h4>
          <ul className="footerList">
            <li><Link>Men</Link></li>
            <li><Link>Women</Link></li>
            <li><Link>Kids</Link></li>
            <li><Link>Best Seller</Link></li>
            <li><Link>New Arrivals</Link></li>
          </ul>
        </div>

        <div className="footerContent">
          <h4>My Account</h4>
          <ul className="footerList">
            <li><Link>My Account</Link></li>
            <li><Link>Returns</Link></li>
            <li><Link>Orders History</Link></li>
            <li><Link>Best Seller</Link></li>
            <li><Link>Order Tracking</Link></li>
          </ul>
        </div>

        <div className="footerContent">
          <h4>Contact Details</h4>
          <div className="contactDetails">
            <p><span><IoMdPin /></span>123 Street, Old Trafford, New South London , UK</p>
            <p><span><MdOutlineMailOutline /></span><a href="mailto: info@sitename.com"> info@sitename.com</a></p>
            <p><span><FiPhone /></span><a href="tel:+45 778 978 965">+45 778 978 965</a></p>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="copyRights">
            <p><span><PiCopyrightBold className='copyRightIcon'/></span> 2020 All Rights Reserved by Bestwebcreator</p>
        </div>

        <div className="creditCardIcons">
          <span><img src={visaCard} alt="" /></span>
          <span><img src={discoverCard} alt="" /></span>
          <span><img src={masterCard} alt="" /></span>
          <span><img src={paypalCard} alt="" /></span>
          <span><img src={amexepCard} alt="" /></span>
        </div>
      </div>
    </footer>
  )
}
