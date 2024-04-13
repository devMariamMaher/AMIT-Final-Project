import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Newsletter } from './Newsletter'
import { Topbar } from './Topbar'

export const Layout = () => {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Outlet></Outlet>
        <Newsletter/>
        <Footer/>
    </>
  )
}
