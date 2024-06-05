import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import './styles.css';


// import required modules
import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';

function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        navigation={true}
        pagination={
            {clickable: true}
        }
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/mattress-4.jpg" alt='mattress-4' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Soft-Foam.jpg" alt='Soft-foam'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Foam-1_2.jpg" alt='foam-1_2'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/mattress-3.jpg" alt='mattress-3'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/foam-4.png" alt='foam-4'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/foam-5_5.png" alt='foam-5'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/foam-6.jpg" alt='foam-6'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/foam-7.png" alt='foam-7'/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle className='bg-gray-400' cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        
      </Swiper>
    </>
  )
}

export default Slider
