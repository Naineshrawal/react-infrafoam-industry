import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from '../slider/Slider'
import BlogList from './BlogList'


import { useTitle } from '../../hooks/useTitle'
import MyContext from '../../context/data/MyContext'

function Home() {
  const context = useContext(MyContext)
  const {getAllBlog, loading} = context
  
  useTitle("Home")
  return (
    <>
      <section id="hero" className='section-container bg-[url("../../../public/images/hero-mattress5-bg.jpg")] mt-4 sm:bg-contain  bg-bottom sm:bg-center bg-no-repeat  w-full min-h-[90vh]'>
        <div className='pt-24 px-10 sm:pt-20  sm:px-20 max-w-xl md:max-w-2xl lg:max-w-4xl'>
          <h2 className='text-4xl md:text-[40px] lg:text-5xl font-bold font-Aclonica text-[#004CA3] mb-5  '>We are The</h2>
          <h1 className='font-Saira font-bold text-4xl media400:text-5xl md:text-6xl lg:text-7xl text-base-red'>Foam & Mattress Manufacturer</h1>
          <p className='text-[#929292] text-xs md:text-sm'>
              A Leading Foam & Mattress Manufacturer <br /> in Surat, Gujarat 
          </p>
          <p className='text-[#288950] text-sm md:text-base my-2 font-semibold'>
          &#x275D; We Make You Fell a Batter Sleep &#x275E;
              
          </p>
          <NavLink to='/contact'>
                <button   className='px-5 py-2 font-bold bg-[#f43336]  text-[#fff] '>
                  Contact Us
                </button>
          </NavLink> 
          
        </div>
      </section>
      <section id='company-info' className='section-container flex my-20 relative md:flex-row flex-col items-center justify-between'>
        <img className='absolute md:right-0 top-96  md:-top-32' src="../../../public/images/bg-map.png" alt="world-map" />
        <div className='md:max-w-[40%] md:ml-10 '>
            <div className='relative md:m-0 mx-10 sm:mx-24  '>
                <img className=' rounded-3xl border-[#4a1616]  border-[12px] ' src="../../../public/images/foam_8.png" alt="foam-8" />
                <img className='lg:max-w-60   max-w-52 absolute -bottom-10 right-[50%] translate-x-[50%]  sm:-right-20 sm:translate-x-0  rounded-3xl border-red-600  border-2 ' src="../../../public/images/Infra_Card.jpeg" alt="visiting-card" />
            </div>
        </div>
        <div className='md:max-w-[60%] px-5 md:px-10 mt-28 md:mt-0 lg:md:pl-20'>
          <div className='border-b-2 border-black mb-5'>
            <h1 className='uppercase text-base-red font-bold text-4xl'>infra foam</h1>
            <p className=''>Manufacturer of PU Foam</p>
            <p className='mt-2 text-sm text-[#000B92] font-extrabold '>An ISO 9001:2015 Certified Company</p>
          </div>
          <ul>
            <li className='flex items-center gap-2'><img width='14px' src="../../../public/images/correct.svg" alt="correct-icon" />Premium Quality</li>
            <li className='flex items-center gap-2'><img width='14px' src="../../../public/images/correct.svg" alt="correct-icon" />Upto 10 years of warranty</li>
            <li className='flex items-center gap-2'><img width='14px' src="../../../public/images/correct.svg" alt="correct-icon" />Commitment of Comfortable slee</li>
            
            
          </ul>
          <p className='md:ml-20 lg:ml-28 mt-10  lg:mr-20 text-sm text-[#929292] leading-loose text-justify'>Welcome to <span className='font-medium  text-[#000000]'>"Infrafoam Industry"</span>, your ultimate destination for top-quality foam and mattresses. As a leading manufacturer in the industry, we take pride in crafting innovative sleep solutions that redefine comfort and support. Our website is a gateway to a world of luxurious rest, where cutting-edge technology and meticulous craftsmanship come together to create the perfect sleeping experience.</p>
        </div>
      </section>
      <section id="our-expertise" className='section-container my-10 '>
        <h1 className='relative text-center text-3xl sm:text-5xl pb-2 mb-10 text-[#333] before:content-[""] before:w-[100px] before:h-[2px] before:inline-block before:bg-[#fec110] before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-0 after:content-[""] after:w-[60px] after:h-[2px] after:inline-block after:bg-[#fec110] after:absolute after:left-[50%] after:translate-x-[-50%] after:-bottom-1 uppercase font-bold'>our expertise</h1>
        <p className='text-center text-sm sm:text-base mb-2'>“We <strong>Infrafoam</strong> Backed by years of mastery, we sculpt sleep solutions that redefine comfort.”
        </p>
        <p className='text-center text-sm sm:text-base'>“Our expertise lies in seamlessly blending science and artistry to create mattresses that cradle dreams.”
        </p>
        <div className='my-16 flex media700:flex-row flex-col mx-auto'>
          <div className='w-full  media700:pr-5'>
              <div className='m-10 '><img className='rounded-xl px-5 bg-[#2c2c2c] border-y-2 border-black' src="../../../public/images/foam-2.png" alt="foam-2" /></div>
              <div>
                <h2>PU FOAM</h2>
                <div className='bg-gray-400 overflow-hidden'>
                  <div className='w-full text-sm sm:text-base flex animate-progress bg-red-500 text-[white] px-4'>
                    <span className='grow'>Premium Quality PU Foam</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
          </div>
          <div className='w-full flex flex-col media700:pl-5'>
            <div className='order-2 media700:order-1'>
              <h2>MATTRESSES</h2>
              <div className='bg-gray-400 overflow-hidden'>
                  <div className='w-full flex text-sm sm:text-base animate-progress bg-red-500 text-[white] px-4'>
                    <span className='grow'>Premium Quality PU Foam</span>
                    <span>100%</span>
                  </div>
              </div>
            </div>
            <div className='m-10 order-1 media700:order-2'><img className='rounded-xl px-5 bg-[#2c2c2c] border-y-2 border-black'src="../../../public/images/foam-2_2.jpeg" alt="foam-2_2" /></div>
          </div>
          
        </div>
      </section>
      <section id="product-sales" className='my-20 bg-[url("../../../public/images/sales-bg.jpeg")] bg-cover bg-no-repeat bg-center bg-fixed'>
        <div className=' bg-black/35'>
              <div className='section-container flex sm:flex-row flex-col sm:space-y-0 space-y-10 py-14 sm:py-28  justify-around items-center'>
                <div id="experience" className='flex flex-col  justify-center items-center'>
                  <img src="../../../public/images/calendar-icon.png" alt="calendar-icon" />
                  <h1 className='text-5xl mt-2 text-[white] font-bold'>9 +</h1>
                  <p className='text-xl text-[black] font-semibold'>Years of Experience</p>
                </div>
                <div id="deleveries" className='flex flex-col  justify-center items-center'>
                  <img src="../../../public/images/delivery-icon.png" alt="delivery-icon" />
                  <h1 className='text-5xl mt-2 text-[white] font-bold'>14999 +</h1>
                  <p className='text-xl text-[black] font-semibold'>Deliveries Completed</p>
                </div>
                <div id="clients" className='flex flex-col  justify-center items-center'>
                  <img src="../../../public/images/happy-client.png" alt="happy-client" />
                  <h1 className='text-5xl mt-2 text-[white] font-bold'>400 +</h1>
                  <p className='text-xl text-[black] font-semibold'>Happy Clients</p>
                </div>
              </div>
        </div>
      </section>
      <section id="our-products" className=''>
          <div className='section-container md:px-28 px-5' >
              <h1 className='relative text-center text-3xl sm:text-5xl pb-2 mb-10 text-[#333] before:content-[""] before:w-[100px] before:h-[2px] before:inline-block before:bg-[#fec110] before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-0 after:content-[""] after:w-[60px] after:h-[2px] after:inline-block after:bg-[#fec110] after:absolute after:left-[50%] after:translate-x-[-50%] after:-bottom-1 uppercase font-bold'>our products</h1>
              
              <p className='text-center text-sm sm:text-base'>“Experience the pinnacle of sleep indulgence with Infrafoam best-in-class mattresses, meticulously crafted to cradle your dreams in pure comfort. Our PU foam products redefine support and longevity, ensuring nights of restful slumber. Elevate your sleep to a new realm of quality and luxury with our exceptional offerings.”
              </p>
          </div>
          <div className='section-container '>
              <div className='flex items-center justify-center space-x-2 pb-3 mt-5 mx-20 border-b-2 border-[#a5a5a5] '>
                <img width='48px' src="../../../public/images/mattress-icon.png" alt="mattress-icon" />
                <h1 className='sm:text-3xl text-2xl font-bold '>Mattresses</h1>
              </div>
          </div>
          
          <div id="mattresses" className='w-full my-10 bg-[url("../../../public/images/mattress_bg.jpg")] bg-cover bg-no-repeat bg-center bg-fixed '>
            <div className='bg-black/35'>
                <div className='section-container flex md:flex-row flex-col md:space-y-0 space-y-10 py-10 px-10 sm:px-40 md:px-14   justify-around md:items-stretch items-center'>
                  <div id="deluxe" className=' w-full  p-8 mx-4 bg-white flex flex-wrap '>
                    <img className=''  src="../../../public/images/mattress-3.jpg" alt="mattress-3" />
                    <h1 className='text-center text-2xl mt-2 font-bold text-[#022144]'>Deluxe Premium Mattress</h1>
                  </div>
                  <div id="silver" className='w-full  p-8 mx-4 bg-white flex flex-col'>
                    <img className=''  src="../../../public/images/mattress-1.jpg" alt="mattress-1" />
                    <h1 className='text-center text-2xl mt-2  font-bold text-[#022144]'>Silver Premium Mattress</h1>
                  </div>
                  <div id="diamond" className='w-full  p-8 mx-4 bg-white flex flex-col '>
                    
                    <img className='' src="../../../public/images/mattress-4.jpg" alt="mattress-4" />
                    <h1 className='text-center text-2xl mt-2 text-[#022144] font-bold'>Diamond Ortho Mattress</h1>
                  </div>
                </div>
            </div>
          </div>
          <div id='foam' className='section-container mb-10'>
            <div className='flex items-center justify-center space-x-2 pb-3 mx-10 sm:mx-20 border-b-2 border-[#a5a5a5]  my-10'>
                <img width='48px' src="../../../public/images/foam-icon.png" alt="mattress-icon" /><h1 className='sm:text-3xl text-2xl font-bold'>Foam</h1>
            </div>
            <div className='sm:space-y-0 space-y-10'>
              <div className='flex sm:flex-row flex-col items-center '>
                <div className=' w-full px-20 lg:px-32 '>
                  <img className='hover:scale-110' src="../../../public/images/foam-7.png" alt="foam-7" />
                </div>
                <div className='w-full md:px-5 lg:px-20 sm:mt-0 mt-10'>
                  <h1 className='text-2xl font-bold mb-8 sm:text-start text-center'>SOFT FOAM</h1>
                  <p className='text-sm sm:text-base text-[#929292] text-justify leading-loose'>Indulge in the luxurious comfort of Infrafoam super soft polyurethane foam – a versatile, resilient, and conforming material perfect for mattresses, bedding, and more. Experience unparalleled softness and support in one remarkable foam.</p>
                </div>
              </div>
              <div className='flex sm:flex-row flex-col items-center '>
                <div className=' w-full px-20 lg:px-32 sm:order-2'>
                  <img className='hover:scale-110' src="../../../public/images/foam-5_5.png" alt="foam-5_5" />
                </div>
                <div className='w-full md:px-5 lg:px-20 sm:mt-0 mt-10'>
                  <h1 className='text-2xl font-bold mb-8 sm:text-start text-center'>HR FOAM</h1>
                  <p className='text-sm sm:text-base text-[#929292] text-justify leading-loose'>Experience the epitome of comfort and support with Infrafoam innovative HR Cool Foam. Crafted with high resilience and infused with cooling gel particles, this polyurethane foam ensures exceptional pressure distribution while maintaining a refreshing sleep temperature. Choose HR Cool Foam for enduring comfort and unmatched durability in mattresses, pillows, and more.</p>
                </div>
              </div>
              <div className='flex sm:flex-row flex-col items-center '>
                <div className=' w-full px-20 lg:px-32 '>
                  <img className='hover:scale-110' src="../../../public/images/foam-1.png" alt="foam-1" />
                </div>
                <div className='w-full md:px-5 lg:px-20 sm:mt-0 mt-10'>
                  <h1 className='text-2xl font-bold mb-8 sm:text-start text-center'>PREMIUM FOAM</h1>
                  <p className='text-sm sm:text-base text-[#929292] text-justify leading-loose'>Elevate your comfort to the extraordinary with Infrafoam premium quality foam – meticulously crafted from high-density polyurethane to provide unmatched comfort, support, and longevity. Designed for high-end furniture, automotive use, and more, its resilient structure ensures enduring comfort and impeccable shape retention, even with continuous use. Choose the pinnacle of comfort and durability with our premium quality foam.</p>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id='trust' className='mt-16 bg-[#181531] bg-[url("../../../public/images/trust-bg.png")] bg-cover bg-no-repeat bg-center'>
          <div className='section-container py-16'>
            <div className='px-0 sm:px-14 md:px-28'>
                <h1 className='relative text-center text-3xl sm:text-5xl pb-2 mb-10 text-[#fff] before:content-[""] before:w-[100px] before:h-[2px] before:inline-block before:bg-[#fec110] before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-0 after:content-[""] after:w-[60px] after:h-[2px] after:inline-block after:bg-[#fec110] after:absolute after:left-[50%] after:translate-x-[-50%] after:-bottom-1 uppercase font-bold'>WHY WE'RE GREAT CHOICE FOR YOU</h1>
                  
                  <p className='text-center text-sm text-[#929292] sm:text-base'>Choosing <strong>Infrafoam</strong> means opting for unrivaled comfort and exceptional sleep quality. With our expertise in crafting top-notch foam and mattresses, we promise nights of rejuvenating rest that you deserve. Experience the difference today and elevate your sleep to new heights.
                  </p>
            </div>
            <div className=' mt-10  flex gap-4 flex-col lg:flex-row justify-center lg:items-stretch items-center '>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='max-w-[255px] bg-[#3F4964] py-10 px-4'>
                    <div className='w-full flex justify-between mb-10 pr-10'>
                      <img className='w-16 h-16' src="../../../public/images/warranty-icon.png" alt="warranty-icon" />
                      <h1 className='text-[#8493C8] text-5xl font-bold'>1.0</h1>
                    </div>
                    <h2 className='text-xl font-bold mb-4'>10 Years Warranty</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Up to 10 years of Warranty On Our products, ensuring your investment provides long-lasting comfort and support.</p>
                </div>
                <div className='max-w-[255px] bg-[#3F4964] py-10 px-4'>
                    <div className='w-full flex justify-between mb-10 pr-10'>
                      <img className='w-16 h-16' src="../../../public/images/value-4-money-icon.png" alt="value-4-money-icon" />
                      <h1 className='text-[#8493C8] text-5xl font-bold'>2.0</h1>
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Value for Money</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Experience luxury without breaking the bank - our offerings provide exceptional value at affordable prices.</p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='max-w-[255px] bg-[#3F4964] py-10 px-4'>
                    <div className='w-full flex justify-between mb-10 pr-10'>
                      <img className='w-16 h-16' src="../../../public/images/skilled.png" alt="skilled" />
                      <h1 className='text-[#8493C8] text-5xl font-bold'>3.0</h1>
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Skilled Craftsmanship</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Carefully Craftedwith expert skill to ensure an outstanding sleep journey.</p>
                </div>
                <div className='max-w-[255px] bg-[#3F4964] py-10 px-4'>
                    <div className='w-full flex justify-between mb-10 pr-10'>
                      <img className='w-16 h-16' src="../../../public/images/trust-icon.png" alt="trust-icon" />
                      <h1 className='text-[#8493C8] text-5xl font-bold'>4.0</h1>
                    </div>
                    <h2 className='text-xl font-bold mb-4'>Trusted Reputation</h2>
                    <p className='text-sm lg:text-base text-[#d8d8d8] '>Customer trust forged through consistent excellence in foam and mattresses</p>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className='section-container flex justify-center mt-20' id='blog-list'>
          {getAllBlog.length > 0 && !loading? 
          <BlogList blogs={getAllBlog} />
        :
        <><img src="../../../public/images/loading-icon.svg" alt="loading-icon" /></>}
          
      </section>
      <section id='slider' className='max-w-[1440px] mx-auto'>
        <Slider/>
      </section>

    </>
  )
}

export default Home
