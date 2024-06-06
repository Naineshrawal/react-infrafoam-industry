import React, { useEffect, useState } from 'react'

function Scrolltotop() {
    const heightToShow = 300;
    const [isVisible, setIsVisible] = useState(false)
  
    const scrollTop = ()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'} )
    }

    const listenToScroll = ()=>{
        const getScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        if(getScroll > heightToShow){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    
    useEffect(()=>{
        
        window.addEventListener("scroll", listenToScroll)
        return () => window.removeEventListener("scroll", listenToScroll)
    },[])

  return (
    <div className='' onClick={scrollTop}>
      {isVisible && <div className='fixed bottom-4  right-2 bg-[#f43336a1] px-1 py-2 rounded-lg cursor-pointer'><img width={"30px"} src="/images/scroll-up.svg" alt="scroll-up" /></div>}
    </div>
  )
}

export default Scrolltotop
