import { ErrorMessage, Field, Formik , Form } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import * as Yup from "yup"
import { ValidationError } from './ValidationError';
import { BreadCrumb } from './BreadCrumb';
import { axiosConfig } from '../axios/axiosConfig';
import {toast} from "react-hot-toast";

export const Register = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(5).max(20).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(20).required(),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    })

    async function handelRegisterForm (values) {
        try{
            const res = await axiosConfig({
                url: "/register",
                method: "POST",
                data: values,
            })
            navigate('/');
        }catch(err) {
            toast.error(err.response.data)
        }
    }

    const onSubmit = (values) => {
        handelRegisterForm(values)
    }

  return (
    <div className="loginPage">
        <BreadCrumb text={"Register"}/>

        <div className='loginContainer'>
            <div className="loginBox">
                <h1>Create an account</h1>

                <div className="loginForm">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(formik) => (
                            <>
                            {console.log(formik)}

                            <Form>
                                <div className="wrapper">
                                    <Field type="text" name="name" placeholder="Enter Your Name"/>
                                    <ErrorMessage name='name' component={ValidationError}/>
                                </div>

                                <div className="wrapper">
                                    <Field type="email" name="email" placeholder="Enter Your Email"/>
                                    <ErrorMessage name='email' component={ValidationError}/>
                                </div>

                                <div className="wrapper">
                                    <Field type="password" name="password" placeholder="Password"/>
                                    <ErrorMessage name='password' component={ValidationError}/>
                                </div>
                                
                                <div className="wrapper">
                                    <Field type="password" name="confirmPassword" placeholder="Confirm Password"/>
                                    <ErrorMessage name='confirmPassword' component={ValidationError}/>
                                </div>

                                <div className="checkboxWrapper">
                                    <div className="checkBox">
                                        <Field type="checkbox" name="termsPolicies" id="termsPolicies" checked={formik.values.rememberMe}/>
                                        <label htmlFor='termsPolicies'>I agree to Terms & Policies</label>
                                    </div>
                                </div>

                                <button type='submit' className='btn'>Register</button>

                                <div className="emailLinks">
                                    <span className='options'>OR</span>
                                    
                                    <div className="emailOptions">
                                        <div className="facebookEmail">
                                            <span><FaFacebookF /></span>
                                            <span>Facebook</span>
                                        </div>
                                        
                                        <div className="googleEmail">
                                            <span><TfiGoogle /></span>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </div>

                                <p>Already Have an Account? <Link to="/login">Log In</Link></p>
                            </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}
