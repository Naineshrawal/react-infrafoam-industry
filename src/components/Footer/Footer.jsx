import React from 'react'
import {Link} from 'react-router-dom'



function Footer() {
  return (
    <>
      <footer id='footer' className=' bg-[#181531] text-[#929292]'>
        <div className='section-container'>
          <div id="top-footer" className='flex sm:flex-row flex-col  space-y-10 sm:space-y-0  py-14'>
            <div className='text-center w-60 space-y-6 mx-auto px-2'>
              <h1 className='uppercase text-[#f43336] font-medium mb-2 text-xl '>Get in touch</h1>
              <p className='text-sm '>
                For more information Business enquiry
                Please Do <Link className='font-bold text-white' to='contact'>Contact us</Link>
              </p>
              <div className='flex justify-center items-center gap-2'>
                <img className='w-3' src="images/phone-solid.svg" alt="call" />
                <p className='text-sm '>+91 9033 237915</p>
              </div>
              <div className='flex justify-center items-center gap-2'>
              <img className='w-3' src="images/email.svg" alt="call" />
              <p className='text-sm '>info@infrafoam.in</p>

              </div>
              <div className='flex justify-center items-center gap-2'>
                <img className='w-3' src="images/location.svg" alt="call" />
              <p className='text-sm '>
                Ho.551, Pl. 1., Opp. Shubh Residency, Vav Jokha Road, Kamrej, Surat (394185) Gujarat.
                </p>
              </div>
            </div>
            <div className='text-center w-60 space-y-6 flex flex-col  items-center mx-auto px-2'>
              <h1 className='uppercase text-[#f43336] font-medium mb-2 text-xl '>About Us</h1>
              <Link  to={'/'}>
                <img className='w-40 ' src= "images/logo.png" alt="logo" />
              </Link>
              <p className='text-sm'>
                A Leading Foam & Mattress Manufacturer <br /> from
                Surat, Gujarat
              </p>
              <p  className='text-sm'>
                We Make You Feel A <span className='text-white font-bold'>Sleep Batter</span>
              </p>
              
            </div>
            <div className='w-60 space-y-6 sm:space-y-16 mx-auto px-2 '>
                <h1 className='uppercase text-[#f43336] font-medium mb-2 text-xl text-center'>Our Products</h1>
                <div className='flex sm:flex-row flex-col  gap-8'>
                  <div className='flex flex-col items-center gap-12'>
                    <h2 className='text-base font-bold text-[#707070]'>Mattress</h2>
                    <img className='w-28 hover:scale-110 duration-200' src="images/footer-mattress5-icon.png" alt="" />
                  </div>
                  <div className='flex flex-col items-center gap-6'>
                    <h2 className='text-base font-bold text-[#707070]'>Foam</h2>
                    <img className='w-28 hover:scale-110 duration-200 drop-shadow-[5px_30px_10px_rgba(106, 106, 106, 0.44)]'  src="images/footer-foam.png" alt="" />
                  </div>
                </div>
                
            </div>
          </div>
          
          
        </div>
        <div id="bottom-footer"  className=' bg-black '>
              <div className='section-container flex flex-col items-center text-center  sm:flex-row  justify-between py-4'>
                <p className='text-[#cacaca] text-sm '>Copyright © InfraFoam All Rights Reserved 2023</p>
                <div className='flex gap-2 text-sm'>
                  <Link to='privacy-policy' className='text-white flex gap-1'><img  width='16px' src="images/right-arrow.svg" alt="" />Privacy Policy</Link>
                  <Link to='terms-conditions' className='text-white flex gap-1'><img  width='16px' src="images/right-arrow.svg" alt="" />Terms & conditions</Link>
                </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
