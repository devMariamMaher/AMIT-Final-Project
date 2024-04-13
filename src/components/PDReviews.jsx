import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export const PDReviews = () => {
  return (
        <div className='userReview'>
            <h2>2 Review For <span>Blue Dress For Woman</span></h2>

            <div className="eachReview">
                <div className="userImg">
                    <img src="/src/images/user1.jpg" alt="" />
                </div>

                <div className="reviewData">
                    <div className="eachUserReview">
                        <h3>Alea Brooks</h3>
                        <p>March 5 2018</p>
                        <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                    </div>

                    <div className="ratingStars">
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaRegStar /></span>
                    </div>
                </div>
            </div>
            
            <div className="eachReview">
                <div className="userImg">
                    <img src="/src/images/user2.jpg" alt="" />
                </div>

                <div className="reviewData">
                    <div className="eachUserReview">
                        <h3>Jinwoo Wong</h3>
                        <p>June 17 2018</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                    
                    <div className="ratingStars">
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaRegStar /></span>
                        <span><FaRegStar /></span>
                    </div>
                </div>
            </div>

            <div className="reviewForm">
                <h2>Add a review</h2>

                <div className="starIcons">
                    <span><FaRegStar /></span>
                    <span><FaRegStar /></span>
                    <span><FaRegStar /></span>
                    <span><FaRegStar /></span>
                    <span><FaRegStar /></span>
                </div>
                
                <Formik>
                    <Form className='formSection'>
                        <div className="reviewFormFields">
                            <Field as="textarea" id="textarea" name="textarea" placeholder="Your review"/>
                            <Field type="text" id="name" name="name" placeholder="Enter Your Name"/>
                            <Field type="email" id="email" name="email" placeholder="Enter Your Email"/>
                        </div>

                        <button type='submit' className='reviewFormBtn btn'>Submit Review</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
