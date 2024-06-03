import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {


  const [hidden, setHidden] = useState("hidden")

  return (
    <header id='header' className='section-container flex relative sm:sticky items-center justify-between px-4 py-2  shadow-md text-[#929292] '>
      <div id='logo' className='w-full sm:w-[20%]'>
        <Link to={'/'}>
              <img className='w-40' src= "../../../public/images/logo.png" alt="logo" />
        </Link>
      </div>

      <div className={` text-xl sm:text-base text-center z-10  top-0 left-0 h-[100vh] sm:h-16 w-full fixed sm:static ${hidden} sm:flex sm:flex-row flex-col     bg-white sm:justify-end items-center`} >
        <img width="30px" onClick={()=>setHidden("hidden")} className='sm:hidden  cursor-pointer absolute top-8 right-4' src='../../../public/images/xmark-solid.svg' />
        <img width="100px" className='sm:hidden mx-auto mt-40 mb-8' src='../../../public/images/logo.png' alt='logo'/>
          <ul onClick={()=>setHidden('hidden')} className='flex sm:flex-row flex-col items-center   space-y-5 sm:space-y-0 space-x-0 sm:space-x-2 md:space-x-5'>
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/' >
                Home
              </NavLink>
            </li>
            <a href="#our-products" className='hover:text-[#f43336] font-medium  duration-300'>
              Our Products
            </a>
            {/* <li>
              <NavLink to='/#our-products' className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              }>Our Product</NavLink>
            </li> */}
            
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/blog' >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/about' >
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/adminlogin' >
                Login
              </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'>
                      <img className='w-4 mx-auto' src='../../../public/images/dashboard.svg' alt='dashboard-icon' onClick={()=>setHidden('hidden')}/>
                        
                      
                </NavLink> 
            </li>
            <NavLink to='/contact'>
                  <button onClick={()=>setHidden('hidden')} className='px-5 py-2 font-bold bg-[#f43336] text-[#fff] '>
                    Contact Us
                  </button>
            </NavLink> 
          </ul>

          
          
      </div>

      <img width="30px" onClick={()=>setHidden(null)} className='sm:hidden  cursor-pointer' src='../../../public/images/bars-solid.svg' />
    </header>
      )
}

export default Header
