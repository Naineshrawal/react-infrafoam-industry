import React from 'react'
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';


function BlogItem({blog}) {
  useTitle("Blog")
  
  const {id, date, thumbnail} = blog
    
  return (
    <div className='w-[full]  md:w-[50%] mx-1 bg-[#f5f5f5]'>
     
      <div className='w-full overflow-hidden bg-red-400 relative '>
          <Link to={`blogpage/${id}`}><img className=' w-[100%] h-[300px] object-cover hover:scale-110 duration-500'  width='520px' height="auto"  src={thumbnail} alt="blog-1 img" /></Link>
          <img className='absolute -bottom-1 left-0 rotate-180 w-full h-[100px] fill-[#f5f5f5]' src="../../../public/images/newicon.svg" alt="new-icon" />
      </div>
      
      
      <div className='relative -top-12 p-7 mx-3 mb-6 bg-[#f5f5f5]'>
        <Link to={`/blogpage/${id}`}><h1 className='text-lg font-bold text-[#0b0051] duration-500 hover:text-[#343692]'>{blog.blogs.title}<span>	&#10230;</span></h1></Link>
        <div className='flex gap-2 font-RobotoCondensed capitalize text-sm text-[#8c8c8c] mt-1'>
          <p>{blog.blogs.category}</p>
          <div className='flex items-center gap-1'>
            <img  width='14px' src="../../../public/images/time-gray.svg" alt="time-gray" />
            <p>{date}</p>
          </div>
        </div>
        <p className='mt-8'>{'description'} <span>...</span> </p>
      </div>
     
    </div>
    
  )
}

export default BlogItem
