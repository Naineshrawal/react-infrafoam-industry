import React from 'react'
import BlogItem from './BlogItem'

function BlogList({blogs}) {
  return (
    <div className='max-w-[90%] lg:px-20  flex flex-col md:flex-row justify-between'>
        
        {blogs.map((blog)=>(
            
            <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default BlogList
