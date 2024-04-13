import React, { useContext, useEffect, useState } from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosSync } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import { IoShuffle } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { RelatedProducts } from '../components/RelatedProducts';
import { Link, useParams } from 'react-router-dom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { axiosConfig } from '../axios/axiosConfig';
import { PDReviews } from '../components/PDReviews';
import { PDAdditionalInfo } from '../components/PDAdditionalInfo';
import { PDDescription } from '../components/PDDescription';
import { CartContext } from '../hooks/CartContext';
import {toast} from "react-hot-toast";

export const ProductDetails = () => {
    const [productItem, setProductItem] = useState({})

    const {id} = useParams()

    async function getProductDetails(){
        const {data} = await axiosConfig({
            url: `/products/${id}`
        })
        setProductItem(data)
    }

    useEffect(()=> {
        getProductDetails()
    }, [])

    const [activeTab, setActiveTab] = useState('Description');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    
    // ==========================================================================
    // API POST

    const [cartItem, setCartItem] = useState([]);

    const {counter, setCounter} = useContext(CartContext)

    async function handelCart(id){
        try {
            const { data } = await axiosConfig({
                url: `/products/${id}`,
            });
    
            const isProductInCart = cartItem.some(item => item.id === data.id);

            if (!isProductInCart) {
                addToCart(data);
            }else{
                toast.error("Product already exists in the cart");
            }
            
        } catch (err) {
            toast.error(err.message);
        }      
    }
    
    async function addToCart(result){
        try{
            const {data} = await axiosConfig({
                url: "/cart",
                method: "POST",
                data: { ...result, quantity: productItem.quantity, size: activeSize },
            })
            setCartItem(prevCartItems => [...prevCartItems, data]);
            setCounter(prevCounter => prevCounter + 1)
            toast.success("Product has been added")
        }catch(err){
            toast.error("Product already exists in cart")
        }
    }

    // ====================================================
    // Sizes active feature
    
    const [activeSize, setActiveSize] = useState('');

    const handleSizeClick = (size) => {
        setActiveSize(size);
    };

    // =====================================================
    // incrementing and decrementing productItem.quantity
    
    const handleQuantityChange = (amount) => {
        const newQuantity = productItem.quantity + amount;
        if (newQuantity >= 1) {
            setProductItem(prevState => ({ ...prevState, quantity: newQuantity }));
        }
    };

  return (
    <div className='productDetails'>
        <BreadCrumb text={"Product Details"}/>

        <div className="pdTop">
            <div className="pdContent">
                <div className="pdImg">
                    <img src={productItem.img} alt="" />
                </div>

                <div className="pdContentDetails">
                    <h1>{productItem.title}</h1>
                    <span className="currentPrice">${productItem.currentPrice}</span>
                    <span className="oldPrice">${productItem.oldPrice}</span>
                    <span className="discount">{productItem.discount}% Off</span>
                    <p className='briefDescription'>{productItem.briefDescription}</p>
                    
                    <div className="policies">
                        <p><span><IoShieldCheckmarkOutline className='shieldIcon'/></span> 1 Year AL Jazeera Brand Warranty</p>
                        <p><span><IoIosSync className='syncIcon'/></span> 30 Day Return Policy</p>
                        <p><span><FaHandHoldingDollar className='codIcon'/></span> Cash on Delivery available</p>
                    </div>

                    <div className="sizes">
                        <p>Size</p>
                        <span className={activeSize === 'XS' ? 'active' : ''} onClick={() => handleSizeClick('XS')}>XS</span>
                        <span className={activeSize === 'S' ? 'active' : ''} onClick={() => handleSizeClick('S')}>S</span>
                        <span className={activeSize === 'M' ? 'active' : ''} onClick={() => handleSizeClick('M')}>M</span>
                        <span className={activeSize === 'L' ? 'active' : ''} onClick={() => handleSizeClick('L')}>L</span>
                        <span className={activeSize === 'XL' ? 'active' : ''} onClick={() => handleSizeClick('XL')}>XL</span>
                    </div>

                    <div className="sectionTwo">
                        <div className="quantity">
                            <button onClick={()=> handleQuantityChange(-1)}>-</button>
                            <span>{productItem.quantity}</span>
                            <button onClick={()=> handleQuantityChange(+1)}>+</button>
                        </div>

                        <button className='btn' onClick={()=> {handelCart(productItem.id)}}><BsCartPlus className='cartIcon'/>Add to cart</button>
                        
                        <div className="wishlistIcons">
                            <span><IoShuffle /></span>
                            <span><IoMdHeartEmpty /></span>
                        </div>
                    </div>

                    <div className="tags">
                        <p>SKU: <span>BE45VGRT</span></p>
                        <p>Category: <span>Clothing</span></p>
                        <p>Tags: <span>Cloth</span>, <span>Printed</span></p>
                    </div>
                    
                    <div className="socialMediaLinks">
                        <p>Share: </p>
                        <div className="linksIcons">
                            <span><FaFacebookF /></span>
                            <span><FaXTwitter /></span>
                            <span><TfiGoogle /></span>
                            <span><IoLogoYoutube /></span>
                            <span><FaInstagram /></span>
                        </div>
                    </div>
                </div>

                <div className="productRatingStars">
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaRegStar /></span>
                    <span>(21)</span>
                </div>
            </div>

            <div className="pdBottomSection">
                <div className="navigationTabs">
                    <ul>
                        <li className={activeTab === 'Description' ? 'active' : ''} onClick={() => handleTabClick('Description')}>
                            <Link onClick={() => handleTabClick('Description')}>Description</Link>
                        </li>

                        <li className={activeTab === 'Additional Info' ? 'active' : ''} onClick={() => handleTabClick('Additional Info')}>
                            <Link onClick={() => handleTabClick('Additional Info')}>Additional Info</Link>
                        </li>

                        <li className={activeTab === 'Reviews' ? 'active' : ''} onClick={() => handleTabClick('Reviews')}>
                            <Link onClick={() => handleTabClick('Reviews')}>Reviews (2)</Link>
                        </li>
                    </ul>
                </div>

                {/* Render content based on active tab */}
                {activeTab === 'Description' && 
                    <div>
                        <PDDescription/>
                    </div>                
                }

                {activeTab === 'Additional Info' && 
                    <div>
                        <PDAdditionalInfo/>
                    </div>
                }

                {activeTab === 'Reviews' && 
                    <div>
                        <PDReviews/>
                    </div>
                }
            </div>
        </div>

        <RelatedProducts/>
    </div>
  )
}
