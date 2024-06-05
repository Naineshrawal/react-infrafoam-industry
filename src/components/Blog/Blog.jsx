import React, { useContext } from 'react'
import BlogList from '../Home/BlogList'
import { useTitle } from '../../hooks/useTitle'
import MyContext from '../../context/data/MyContext'

function Blog() {

  const context = useContext(MyContext)
  const {getAllBlog, loading} = context

  
  useTitle("Blog")
  return (
    
    <section className='section-container flex justify-center my-20' id='blog-list'>
        {getAllBlog.length > 0 && !loading ? 
          <BlogList blogs={getAllBlog} />
        :
        <><img src="../../../public/images/loading-icon.svg" alt="loading-icon" /></>}
    </section>
  )
}

export default Blog
