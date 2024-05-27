import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Blog from './components/Blog/Blog.jsx'
import Privacypolicy from './components/Policy & terms/Privacypolicy.jsx'
import Termsconditions from './components/Policy & terms/Termsconditions.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='/' element= {<Home/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/blog' element= {<Blog/>} />
      <Route path='/contact' element= {<Contact/>} />
      <Route path='/privacy-policy' element= {<Privacypolicy/>} />
      <Route path='/terms-conditions' element= {<Termsconditions/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
