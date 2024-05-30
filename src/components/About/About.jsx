import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
      <section className='section-container my-10'>
        <div className='flex flex-col sm:flex-row justify-center items-center text-center sm:text-start'>
          <div className='sm:w-full lg:pl-8 '>
            <h1 className='text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#333333] mb-6'>About Us</h1>
            <p className='max-w-[245px] text-sm lg:text-base text-[#929292]'>We are The Leading Manufacturer of PU Foam & Mattresses Since  9<sup>+</sup> Years</p>
          </div>
          <div className='sm:w-full p-6'><img className='border-4  border-black rounded-2xl' src="../../../public/images/about-us-img.jpg" alt="about-us" /></div>
        </div>
      </section>
      <section className='section-container my-10'>
        <div className='flex justify-between gap-4 sm:flex-row flex-col'>
            <div className='w-full flex flex-col justify-center items-center sm:text-start text-center sm:mb-0 mb-16'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#333333] mb-6'>Our Products</h1>
              <p className=' md:text-lg lg:text-xl text-[#324a6d] '>We Manufacture Premium Quality Foam & Mattress with Our Skilled Craftsmanship</p>
            </div>
            <div className='w-full flex flex-col sm:items-start items-center justify-end sm:text-start text-center'>
              <img className='w-80 hover:scale-110 duration-200 mb-10' src="../../../public/images/mattress-6.jpg" alt="mattress-6" />
              <h2 className='text-xl  md:text-2xl  font-medium  text-[#333333]'><u>Premium Mattress</u></h2>
              <p className='text-[#929292] text-sm'>Premium Quality Mattresses With Up to 10 Years of Warranty</p>
            </div>
            <div className='w-full flex flex-col sm:items-start items-center justify-end  sm:text-start text-center '>
              <img className='w-52 hover:scale-110 duration-200 mb-10' src="../../../public/images/footer-foam.png" alt="footer-foam" />
              <h2 className='text-xl  md:text-2xl  font-medium  text-[#333333]'><u>Premium Foam</u></h2>
              <p className='text-[#929292] text-sm'>Premium Quality Foam With Up to 10 Years of Warranty</p>
            </div>
        </div>
      </section>
      <section className='section-container my-10 mt-20'>
        <h1 className='relative text-center text-3xl sm:text-5xl pb-2 mb-10 text-[#333333] before:content-[""] before:w-[100px] before:h-[2px] before:inline-block before:bg-[#fec110] before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-0 after:content-[""] after:w-[60px] after:h-[2px] after:inline-block after:bg-[#fec110] after:absolute after:left-[50%] after:translate-x-[-50%] after:-bottom-1 uppercase font-bold'>Why Choose Us</h1>
        <div className=' mt-10  flex gap-4 flex-col lg:flex-row justify-center lg:items-stretch items-center '>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='max-w-[255px] bg-[#3F4964] flex flex-col items-center justify-center px-8 text-center  py-8'>
                    <div className=' flex justify-center mb-10 '>
                      <img className='w-16 h-16' src="../../../public/images/warranty-icon.png" alt="warranty-icon" />
                    </div>
                    <h2 className='text-xl font-bold mb-4 '>Durability Guaranteed</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Our products Comes with Up to 10 Years of Warranty, ensuring your investment provides long-lasting comfort and support.</p>
                </div>
                <div className='max-w-[255px] bg-[#3F4964] flex flex-col items-center justify-center px-8 text-center py-8'>
                    <div className='flex justify-center  mb-10 '>
                      <img className='w-16 h-16' src="../../../public/images/value-4-money-icon.png" alt="value-4-money-icon" />
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Value for Money</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Experience luxury without breaking the bank - our offerings provide exceptional value at affordable prices.</p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='max-w-[255px] bg-[#3F4964] flex flex-col items-center justify-center px-8 text-center py-8'>
                    <div className='flex justify-center  mb-10 '>
                      <img className='w-16 h-16' src="../../../public/images/skilled.png" alt="skilled" />
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Skilled Craftsmanship</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Carefully Craftedwith expert skill to ensure an outstanding sleep journey.</p>
                </div>
                <div className='max-w-[255px] bg-[#3F4964] flex flex-col items-center justify-center px-8 text-center py-8'>
                    <div className='flex justify-center  mb-10 '>
                      <img className='w-16 h-16' src="../../../public/images/trust-icon.png" alt="trust-icon" />
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Trusted Reputation</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Customer trust forged through consistent excellence in foam and mattresses</p>
                </div>
              </div>
            </div>
      </section>
      <section id="hero" className='section-container bg-[url("../../../public/images/hero-mattress5-bg.jpg")] mt-20 sm:bg-contain  bg-bottom sm:bg-center bg-no-repeat  w-full min-h-[90vh]'>
        <div className='pt-24 px-10 sm:pt-20  sm:px-20 max-w-xl md:max-w-2xl lg:max-w-3xl'>
          <h1 className='font-Saira font-medium text-4xl media400:text-5xl md:text-6xl lg:text-7xl text-base-red mb-20'>For Premium Quality Mattress</h1>
          <p className='text-[#895a5a] text-xs md:text-sm mb-2'>
            For, More Information<br />& Business Enquiry 
          </p>
          
          <NavLink to='/contact'>
                <button   className='px-5 py-2 font-bold bg-[#f43336]  text-[#fff] '>
                  Contact Us
                </button>
          </NavLink> 
          
        </div>
      </section>
      <section id="about-footer" className='max-w-[1440px] mx-auto px-0 mb-20'>
        <div className='bg-[#f43336] text-center p-2 text-[white]'>©InfraFoam 2023 All Rights Reserved.</div>
      </section>
    </>
  )
}

export default About
