import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {


  const [hidden, setHidden] = useState("hidden")

console.log(hidden);
  return (
    <header id='header' className='flex relative sm:sticky items-center justify-between px-4 py-4  shadow-md text-black '>
      <div id='logo' className='w-full sm:w-[20%]'>
        <Link to={'/'}>
              <img className='w-40' src= "../../../public/images/logo.png" alt="logo" />
        </Link>
      </div>

      <div className={`fixed text-xl sm:text-base text-center  ${hidden} top-0 left-0 h-[100vh] sm:h-16 w-full sm:static sm:flex sm:flex-row flex-col  gap-6 md:gap-20   bg-white sm:justify-end items-center`} >
        <img width="30px" onClick={()=>setHidden("hidden")} className='sm:hidden  cursor-pointer absolute top-8 right-4' src='../../../public/images/xmark-solid.svg' />
        <img width="100px" className='sm:hidden mx-auto my-8' src='../../../public/images/logo.png' />
          <ul onClick={()=>setHidden('hidden')} className='flex sm:flex-row flex-col mb-8 sm:mb-0 space-y-5 sm:space-y-0 space-x-0 sm:space-x-4 md:space-x-6'>
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/' >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/#our-products' className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              }>Our Product</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/blog' >
                Blog
              </NavLink>
            </li><li>
              <NavLink className={({isActive})=> `${isActive ? 'text-[#f43336]': null} hover:text-[#f43336] font-medium  duration-300`
              } to='/about' >
                About
              </NavLink>
            </li>
          </ul>
          <NavLink to='/contact'>
                <button onClick={()=>setHidden('hidden')} className='px-5 py-2 font-bold bg-[#f43336]  text-white '>
                  Contact Us
                </button>
          </NavLink> 
      </div>

      <img width="30px" onClick={()=>setHidden(null)} className='sm:hidden  cursor-pointer' src='../../../public/images/bars-solid.svg' />
    </header>
      )
}

export default Header
