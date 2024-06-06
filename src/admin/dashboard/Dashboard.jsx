import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'
import MyContext from '../../context/data/MyContext'

function Dashboard() {
  
  useTitle("Dashboard")
  const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.clear("admin")
    navigate("/")
  }
  const context = useContext(MyContext)
  const {getAllBlog, deleteBlogs} = context

  // console.log(getAllBlog);

  return (
    <div className='section-container my-10'>

      <div className='flex justify-center sm:flex-row flex-col sm:text-start text-center items-center gap-10 px-4 py-6 sm:py-10'>
        <div>
            <div className='w-[120px] h-[120px] bg-[#afd3ff] rounded-[50%]  mx-auto  overflow-hidden border-[6px] border-[#4e4e4e]'><img className='relative w-[120px] h-[120px] -bottom-2'  src="/images/profile-icon.png" alt="profile-icon" /></div>
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Brijesh Kapadia</h1>
          <h2 className='text-lg font-medium'>Admin</h2>
          <h2 className='text-lg font-medium'><span>Total Blogs :</span> 2</h2>
          <div className='flex gap-2 mt-4'>
              <Link to={'/createblog'}><button className='px-4 py-2 bg-black text-[white] rounded-lg'>Create Blog</button></Link>
            <Link>
              <button onClick={logOut} className='px-4 py-2 bg-black text-[white] rounded-lg'>Logout</button>
            </Link>
          </div>
        </div>
      </div>

      <hr className='bg-gray h-1 bg-[#4e4e4e]' />
      
      <div className=' container mx-auto px-4 max-w-7xl my-5' >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
                                {/* thead  */}
                                <thead
                                    
                                    className="text-xs bg-black">
                                    <tr>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"S.No"}
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"Thumbnail"}
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"Title"}
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"Category"}
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"Date"}
                                        </th>
                                        <th  scope="col" className="px-6 py-3 text-[white]">
                                          {"Action"}
                                        </th>
                                    </tr>
                                </thead>
                                {/* tbody  */}
                                
                                {getAllBlog.length > 0? 
                                <>
                                {getAllBlog.map((item, index)=>{
                                  
                                  const {thumbnail, date, id} = item
                                  return(
                                    
                                      <tbody key={index}>
                                          <tr className=" border-b-2">
                                              {/* S.No   */}
                                              <td  className="px-6 py-4">
                                                  {index + 1}.
                                              </td>
                                              {/* Blog Thumbnail  */}
                                              <th  scope="row" className="px-6 py-4 font-medium ">
                                                  {/* thumbnail  */}
                                                  <img className='w-16 rounded-lg' 
                                                  src={thumbnail} alt="thumbnail" />
                                              </th>
                                              {/* Blog Title  */}
                                              <td  className="px-6 py-4">
                                                  {item.blogs.title}
                                              </td>
                                              {/* Blog Category  */}
                                              <td  className="px-6 py-4">
                                                  {item.blogs.category}
                                              </td>
                                              {/* Blog Date  */}
                                              <td  className="px-6 py-4">
                                                  {date}
                                              </td>
                                              {/* Delete Blog  */}
                                              <td  className="px-6 py-4">
                                                  <button className=' px-4 py-1 rounded-lg text-[white] font-bold bg-red-500'
                                                  onClick={()=>deleteBlogs(id)}>
                                                    Delete
                                                  </button>
                                              </td>
                                          </tr>
                                      </tbody>
                                  
                                  )
                                })}</>
                                :
                                <tbody className='text-base font-medium text-base-red p-1'><tr><td>Not Blogs yet,  Please Create New Blog...</td></tr></tbody>}
                            </table>
                        </div>
      </div>
                
    </div>
  )
}

export default Dashboard
