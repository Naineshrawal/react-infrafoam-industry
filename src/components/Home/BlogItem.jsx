import React from 'react'
import { Link } from 'react-router-dom';


function BlogItem({
    blog:{
        id,
        title,
        description,
        cover,
        createdAt,
        category,

    }
    

}) {
    
  return (
    <div className='w-full p-10 px-1 sm:px-10'>
     <img width={"full"} src={cover} alt="blog-1 img" />
     <Link to={`/blogpage/${id}`}><h1 className='text-2xl font-semibold duration-300 hover:cursor-pointer hover:text-[#4e4ecc]' >{title}<span className='text-lg font-bold'>⟶</span></h1></Link>
     <div className='flex items-center gap-3 text-[#929292] '>
                <p className='font-RobotoCondensed capitalize font-medium '>{category}</p>
                <div className='flex gap-1'>
                    <img width='14px'  src="../../../public/images/time-gray.svg" alt="hours" />
                    <span className='text-sm'>{createdAt}</span>
                </div>
            </div>
     <p>{description}</p>
     
    </div>
  )
}

export default BlogItem
