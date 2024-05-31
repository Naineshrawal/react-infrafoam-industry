import React from 'react'
import BlogItem from './BlogItem'

function BlogList({blogs}) {
  return (
    <div className='section-container flex flex-col md:flex-row justify-between'>
        
        {blogs.map((blog)=>(
            
            <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default BlogList
