import { ErrorMessage, Field, Formik , Form } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import * as Yup from "yup"
import { ValidationError } from './ValidationError';
import { BreadCrumb } from './BreadCrumb';
import { axiosConfig } from '../axios/axiosConfig';
import {toast} from "react-hot-toast";

export const Login = () => {
    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(20).required(),
    })

    async function handelLoginForm (values) {
        try{
            const res = await axiosConfig({
                url: "/login",
                method: "POST",
                data: values,
            })
            navigate('/');
        }catch(err) {
            toast.error(err.response.data)
        }
    }

    const onSubmit = (values) => {
        handelLoginForm(values)
    }

  return (
    <div className="loginPage">
        <BreadCrumb text={"Login"}/>

        <div className='loginContainer'>
            <div className="loginBox">
                <h1>Login</h1>

                <div className="loginForm">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(formik) => (
                            <>
                                {console.log(formik)}

                                <Form>
                                    <div className="wrapper">
                                        <Field type="email" name="email" placeholder="Your Email"/>
                                        <ErrorMessage name='email' component={ValidationError}/>
                                    </div>

                                    <div className="wrapper">
                                        <Field type="password" name="password" placeholder="Password"/>
                                        <ErrorMessage name='password' component={ValidationError}/>
                                    </div>

                                    <div className="checkboxWrapper">
                                        <div className="checkBox">
                                            <Field type="checkbox" name="rememberMe" id="rememberMe" checked={formik.values.rememberMe}/>
                                            <label htmlFor='rememberMe'>Remember me</label>
                                        </div>
                                        <span>Forgot password?</span>
                                    </div>

                                    <button type='submit' className='btn'>Log in</button>

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

                                    <p>Don't Have an Account? <Link to="/signup">Sign up now</Link></p>
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
