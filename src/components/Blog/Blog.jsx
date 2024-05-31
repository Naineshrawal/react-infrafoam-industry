import React from 'react'
import BlogList from '../Home/BlogList'
import { blogList } from '../../config/data'

function Blog() {
  return (
    <div>
      <BlogList blogs={blogList}/>
    </div>
  )
}

export default Blog
