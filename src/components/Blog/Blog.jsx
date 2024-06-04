import React, { useContext } from 'react'
import BlogList from '../Home/BlogList'
import { blogList } from '../../config/data'
import { useTitle } from '../../hooks/useTitle'
import MyContext from '../../context/data/MyContext'

function Blog() {

  const context = useContext(MyContext)
  const {getAllBlog} = context

  useTitle("Blog")
  return (
    
    <section className='section-container flex justify-center mt-20' id='blog-list'>
        <BlogList blogs={getAllBlog} />
    </section>
  )
}

export default Blog
