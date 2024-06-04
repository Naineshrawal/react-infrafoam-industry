import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { Route,  RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Blog from './components/Blog/Blog.jsx'
import Privacypolicy from './components/Policy & terms/Privacypolicy.jsx'
import Termsconditions from './components/Policy & terms/Termsconditions.jsx'
import BlogPage from './components/blogPage/BlogPage.jsx'
import AdminLogin from './admin/adminLogin/AdminLogin.jsx'
import Dashboard from './admin/dashboard/Dashboard.jsx'
import MyState from './context/data/MyState.jsx'
import CreateBlog from './admin/createBlog/CreateBlog.jsx'
import { Navigate } from 'react-router-dom'



export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "testuser@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}




const router = createBrowserRouter(
  createRoutesFromElements(
    
      
      <Route path='/' element = {<Layout />} >
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/blog' element= {<Blog/>} />
        <Route path='/blogpage/:id' element= {<BlogPage/>} />
        <Route path='/adminlogin' element= {<AdminLogin/>} />
        <Route path='/dashboard' element= {
          <ProtectedRouteForAdmin>
            <Dashboard/>
          </ProtectedRouteForAdmin>
        } />
        <Route path='/createblog' element= {
          <ProtectedRouteForAdmin>
          <CreateBlog/>
        </ProtectedRouteForAdmin>
      } />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/privacy-policy' element= {<Privacypolicy/>} />
        <Route path='/terms-conditions' element= {<Termsconditions/>} />
      </Route>
      
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>

        <RouterProvider router={router}/>
  
    </MyState>
  </React.StrictMode>,
)


