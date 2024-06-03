import React from 'react'
import BlogList from '../Home/BlogList'
import { blogList } from '../../config/data'
import { useTitle } from '../../hooks/useTitle'

function Blog() {
  useTitle("Blog")
  return (
    
    <section className='section-container flex justify-center mt-20' id='blog-list'>
        <BlogList blogs={blogList} />
    </section>
  )
}

export default Blog
