import React from 'react'
import { useTitle } from '../../hooks/useTitle'

function AdminLogin() {
  useTitle("Login")
  return (
    <div className='section-container my-10 '>
        <div className=' mx-auto max-w-sm bg-[rgb(41,41,41)] py-10 px-5 rounded-lg'>
            <div className=' '>
                  
                  <div className='w-[90px] h-[90px] bg-white rounded-[50%]  mx-auto  overflow-hidden border-[6px] border-[#4e4e4e]'><img className='relative -bottom-2'  src="../../../public/images/adminlogin-icon.png" alt="adminlogin-icon" /></div>
                
                  <h1 className='text-3xl text-center text-[white] font-semibold'>Admin Login</h1>
            </div>      
            <form className='flex flex-col space-y-4 mt-10' action="">
              <input className='p-2 rounded-lg outline-none' type="text" id='name' placeholder='Name' name='name' />
              <input className='p-2 rounded-lg outline-none' type="password" id='password' placeholder='Password' name='password' />
              <button type='submit' className='bg-[gray] p-2 rounded-lg outline-none font-bold text-lg'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
