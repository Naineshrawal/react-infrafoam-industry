import React from 'react'
import BlogItem from './BlogItem'
import { useTitle } from '../../hooks/useTitle'

function BlogList({blogs}) {
  useTitle("Blog")
  
  return (
    <div className='max-w-[90%] lg:px-20  flex flex-col md:flex-row justify-between'>
        
        {blogs.map((blog)=>(
            
            <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default BlogList
