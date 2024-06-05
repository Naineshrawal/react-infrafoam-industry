import React, { useState } from 'react'
import { useTitle } from '../../hooks/useTitle'
import { auth } from '../../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'

function AdminLogin() {
  useTitle("Login")

  const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if(!email || !password) {
            return toast.error("Fill all required fields")
        }
        try {
          navigate('/dashboard');
          
          const result = await signInWithEmailAndPassword(auth, email, password);
          
          toast.success('Login Success')
          localStorage.setItem('admin', JSON.stringify(result));
          navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed')
            alert(error)
        }
    }
  return (
    <div className='section-container my-10 '>
        <div className=' mx-auto max-w-sm bg-[rgb(41,41,41)] py-10 px-5 rounded-lg'>
            <div className=' '>
                  
                  <div className='w-[90px] h-[90px] bg-white rounded-[50%]  mx-auto  overflow-hidden border-[6px] border-[#4e4e4e]'><img className='relative -bottom-2'  src="images/adminlogin-icon.png" alt="adminlogin-icon" /></div>
                
                  <h1 className='text-3xl text-center text-[white] font-semibold'>Admin Login</h1>
            </div>      
            <form className='flex flex-col space-y-4 mt-10' action="">
              <input 
              className='p-2 rounded-lg outline-none' 
              onChange={(e)=>setEmail(e.target.value)} 
              value={email} 
              type="email" 
              id='email' 
              placeholder='email' 
              name='email' 
              />
              <input 
              className='p-2 rounded-lg outline-none' 
              onChange={(e)=>setPassword(e.target.value)} 
              value={password} 
              type="password" 
              id='password' 
              placeholder='Password' 
              name='password' 
              />
              <button 
              onClick={login} 
              type='submit' 
              className='bg-[gray] p-2 rounded-lg outline-none font-bold text-lg'
              >Login</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
