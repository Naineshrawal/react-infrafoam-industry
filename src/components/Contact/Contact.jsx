import React from 'react'

function Contact() {
  return (
    <>
      <section className="section-container my-20">
        <div className='flex'>
          <div className='w-full pl-10' >
            <img width='200px' className='mx-auto mb-8' src="../../../public/images/logo.png" alt="logo" />
            <h1 className='text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#333333] '>Contact Us</h1>
            <div className='flex items-center gap-2 mt-10'>
              <img src="../../../public/images/call-icon.svg" alt="call-icon" />
              <p >9933237915</p>
            </div>
            <p className='max-w-[245px] text-sm lg:text-base text-[#929292] '>We would love to hear from you.
              Feel free to reach out using the below details.</p>
          </div>
          <div className='w-full'>
              <h2 className='text-3xl font-semibold text-[#545454]'>Send Your Message</h2>
          </div>
        </div>
      </section>
      <section id='visit us' className="section-container justify-between flex gap-10 sm:flex-row flex-col mb-16">
        
          <div className='w-full flex justify-center items-center order-2 sm:order-1'>
            <iframe className='w-full max-w-lg h-[350px]  mx-auto md:mx-0 md:ml-auto' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7437.436014301957!2d73.004639!3d21.243028!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzM0LjkiTiA3M8KwMDAnMTYuNyJF!5e0!3m2!1sen!2sus!4v1717075392915!5m2!1sen!2sus" loading="lazy"></iframe>
          </div>
        
        
        <div className='w-full flex flex-col  justify-center gap-4 order-1'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#333333] mb-16 md:text-start text-center'>Visit Us</h1>
            <div>
              <div className='flex items-center gap-2'><img width='16px' src="../../../public/images/location-dark.svg" alt="location-dark" /><strong>Address :</strong></div>
              <p className='max-w-[300px]'>Ho.551, Pl. 1., Opp. Shubh Residency, Vav Jokha Road, Kamrej, Surat (394185) Gujarat.</p>
            </div>
            <div>
              <div className='flex items-center gap-2'><img width='16px' src="../../../public/images/time-dark.svg" alt="time-dark" /><strong>Hours :</strong></div>
              <p>Mon-Sat 9:00AM - 5:00PM</p>
            </div>
            <div>
              <div className='flex items-center gap-2'><img width='16px' src="../../../public/images/call-icon.svg" alt="call" /><strong>Phone :</strong></div>
              <p>+91 99332 37915</p>
            </div>
            <div>
              <div className='flex items-center gap-2'><img width='16px' src="../../../public/images/email-dark.svg" alt="email" /><strong>Email :</strong></div>
              <p>info@infrafoam.in</p>
            </div>
        </div>
        
      </section>
      <section id="about-footer" className='max-w-[1440px] mx-auto px-0 mb-20'>
        <div className='bg-[#f43336] text-center p-2 text-[white]'>©InfraFoam 2023 All Rights Reserved.</div>
      </section>
    </>
  )
}

export default Contact
