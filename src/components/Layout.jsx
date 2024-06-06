import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Scrolltotop from './Scrolltotop'
import { Toaster } from 'react-hot-toast'

function Layout() {
  return (
    <>
        <Header />     
            <Outlet/>
              <Scrolltotop/>
            <Toaster/>
        <Footer/>
    </>
  )
}

export default Layout
