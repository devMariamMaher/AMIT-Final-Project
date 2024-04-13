import React, { useContext, useEffect, useState } from 'react'
import { axiosConfig } from '../axios/axiosConfig'
import { Form, Link, useParams } from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5";
import { fetchCartItems } from '../hooks/CartUtility';
import { CartContext } from '../hooks/CartContext';
import { Loading } from '../components/Loading';
import { Field, Formik } from 'formik';
import { BreadCrumb } from '../components/BreadCrumb';

export const Cart = () => {
  const [cartCounter, setCartCounter] = useState(1)

  const [cartItem, setCartItem] = useState([])

  const { setCounter } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const [loading, setLoading] = useState(true);
  
  async function getCart(){
    const {data} = await axiosConfig({
      url: `/cart`
    })
    setCartItem(data)
    setLoading(false);
    calculateTotalPrice(data);
  }

  async function deleteCartItem(productId) {
    try {
      await axiosConfig({
        method: 'DELETE',
        url: `/cart/${productId}`
      });
      getCart();
      fetchCartItems(setCounter);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  }

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, curr) => {
      const quantity = curr.quantity || 1;
      return acc + curr.currentPrice * quantity;
    }, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (productId, amount) => {
    const updatedCartItems = cartItem.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setCartItem(updatedCartItems);    
    calculateTotalPrice(updatedCartItems);
  };
  
  useEffect(()=> {
    getCart()
  }, [])

  if (loading) {
    return <div><Loading/></div>;
  }

  return (
    <div className="cartPage">
      <BreadCrumb text={"Cart"}/>

      <div className='cartContainer'>
        <h1>Your Cart:</h1>
        {cartItem.length === 0 ? (
          <div className="emptyCart">
            <h2>Your cart is empty</h2>
            <img src="/src/images/emptyCart.png" alt="" />
          </div>
        ) : (
          <>
            {cartItem.map((product)=>(
              <div key={product.id} className='eachProduct'>
                <div className="row">
                  <div className="eachProductImg">
                    <img src={product.img} alt="" />
                  </div>
          
                  <div className="eachProductContent">
                    <div className="eachProductDetails">
                      <Link to={`/product-details/${product.id}`}>
                        <h3>{product.title}</h3>
                      </Link>
                      <p>{product.cartDescription}</p>
                      <p className='productSize'>Size: <span>{product.size}</span></p>

                      <div className="productPrices">
                        <span className="currentPrice">${product.currentPrice}</span>
                        <span className="oldPrice">${product.oldPrice}</span>
                        <span className="discount">{product.discount}% Off</span>
                      </div>
                    </div>
          
                    <div className="eachQuantityPrice">
                      <div className="eachProductQuantity">
                        <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                        <span className='trashIcon' onClick={()=> deleteCartItem(product.id)}><IoTrashOutline /></span>
                      </div>
            
                      <div className="eachProductPrice">
                        <p>Price: <span>${product.quantity * product.currentPrice}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
            ))}

            <div className="totalPrice">
              <p>Total Price: <span>${totalPrice}</span></p>
            </div>
            
            <div className="checkoutSection">
              <Formik>
                <Form className='promoCodeForm'>
                  <Field type="text" id="promoCode" name="promoCode" placeholder="Promo code"/>
                  <button type='submit' className='promoCodeBtn btn'>Apply</button>
                </Form>
              </Formik>
              
              <div className="checkoutBtn">
                <button className='btn'>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
