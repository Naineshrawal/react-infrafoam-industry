import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Scrolltotop from './Scrolltotop'

function Layout() {
  return (
    <>
        <Header />     
            <Outlet/>
            <Scrolltotop/>
        <Footer/>
    </>
  )
}

export default Layout
