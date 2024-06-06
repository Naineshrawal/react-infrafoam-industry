import React, { useEffect } from 'react'
import { useState } from 'react';
import { useTitle } from '../../hooks/useTitle'
import { Editor } from '@tinymce/tinymce-react';
import { Link, useNavigate } from "react-router-dom";
import MyContext from '../../context/data/MyContext';
import { useContext } from 'react';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes,  } from 'firebase/storage';
import { fireDb, storage } from '../../firebase/FirebaseConfig';

function CreateBlog() {
  useTitle("Blog")
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const [thumbnail, setThumbnail] = useState();
  const [text, settext] = useState('');

  const [blogs, setBlogs] = useState({
    title:"",
    category:"",
    content:"",
    shortDesc:"",
    time:Timestamp.now(),
  });
  
  useEffect(()=>{
      if(text.length < 300) setBlogs({...blogs, shortDesc:text})
        console.log(blogs.shortDesc);
    
    
},[text])
  // Create markup function 
  function createMarkup(c) {
    return { __html: c };
  }

  const addPost = async()=>{
    
      if(blogs.title === "" || blogs.category === " " || blogs.content === "" || blogs.time === "" ){
        return toast.error("Please Fill All fields")
      }
      uploadImage()
  }

  const uploadImage = () => {
        if (!thumbnail) return;
        
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(fireDb, "blogPost")
                try {
                    addDoc(productRef, {
                        blogs,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        )
                    })
                    navigate('/dashboard')
                    toast.success('Post Added Successfully');


                } catch (error) {
                    toast.error(error)
                    
                }
            });
        });
    }


  return (
      <div className=' container mx-auto max-w-5xl py-6'>
        
          <div className="p-5" style={{
              background: mode === 'dark'
                  ? '#353b48'
                  : 'rgb(226, 232, 240)',
              borderBottom: mode === 'dark'
                  ? ' 4px solid rgb(226, 232, 240)'
                  : ' 4px solid rgb(30, 41, 59)'
          }}>
              {/* Top Item  */}
              
              <div className="mb-2  flex items-center justify-between">
                  <div className="">
                      {/* Dashboard Link  */}
                        <Link   to='/dashboard'>
                          <div className='flex justify-evenly px-2 items-center gap-1 bg-gray-400 hover:bg-slate-600 text-[#434556] hover:text-[white]  rounded-xl py-1'>
                                <span className='font-extrabold text-xl mt-[2px]'>&#8629;</span>
                                <p className=' font-semibold '>Go Back</p>
                          </div>
                        </Link>
                      {/* Text  */}
                      
                  </div>
                  
                  <div className='w-7 cursor-pointer' onClick={toggleMode}>
                    <img 
                    src={mode === "light" ?
                          "/images/dark-mode-icon.png"
                        :
                        "/images/light-mode-icon.png"
                    } 
                    alt="theme-mode" />
                  </div>
              </div>
              <h1 className='text-3xl font-bold text-center'
                          
                          style={{
                              color: mode === 'dark'
                                  ? 'white'
                                  : 'black'
                          }}
                      >Create Blog
               </h1>
              {/* main Content  */}
              <div className="mb-3 mt-5">
                  {/* Thumbnail  */}
                  {thumbnail && <img className=" w-full rounded-md mb-3 "
                      src={thumbnail
                          ? URL.createObjectURL(thumbnail)
                          : ""}
                      alt="thumbnail"
                  />}
                  {/* Text  */}
                  <h1
                      
                      className="mb-2 font-semibold"
                      style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >Upload Thumbnail
                  </h1>
                  {/* First Thumbnail Input  */}
                  <input
                      type="file"
                      label="Upload thumbnail"
                      className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
                      style={{
                          background: mode === 'dark'
                              ? '#dcdde1'
                              : 'rgb(226, 232, 240)'
                      }}
                      onChange={(e) => setThumbnail(e.target.files[0])}
                  />
              </div>
              {/* Second Title Input */}
              <div className="mb-3">
                  <input
                      label="Enter your Title"
                     className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
               outline-none ${mode === 'dark'
               ? 'placeholder-black'
               : 'placeholder-black'}`}
                      value={blogs.title}
                      onChange={(e)=>setBlogs({...blogs, title:e.target.value})}
                      placeholder="Enter Your Title"
                      style={{
                          background: mode === 'dark'
                              ? '#dcdde1'
                              : 'rgb(226, 232, 240)'
                      }}
                      name="title"
                  />
              </div>
              {/* Third Category Input  */}
              <div className="mb-3">
                  <input
                      label="Enter your Category"
                      className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
               outline-none ${mode === 'dark'
               ? 'placeholder-black'
               : 'placeholder-black'}`}
                      placeholder="Enter Your Category"
                      style={{
                          background: mode === 'dark'
                              ? '#dcdde1'
                              : 'rgb(226, 232, 240)'
                      }}
                      name="category"
                      value={blogs.category}
                      onChange={(e)=>setBlogs({...blogs, category:e.target.value})}
                  />
              </div>
              {/* Four Editor  */}
              <Editor
                  apiKey='t4mlig95ssuwaroz73l98vh1z4veq7ftsip6aqo9v6p09uxw'
                  onEditorChange={(newValue, editor) => {
                      setBlogs({ ...blogs, content: newValue });
                      settext(editor.getContent({ format: 'text' }));
                  }}
                  onInit={(evt, editor) => {
                      settext(editor.getContent({ format: 'text' }));
                  }}
                  init={{
                      plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
                      toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                  }}
              />
              {/* Five Submit Button  */}
              <button className=" w-full mt-5 px-1 py-2 rounded-lg text-lg font-bold "
                  style={{
                      background: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : 'rgb(30, 41, 59)',
                      color: mode === 'dark'
                          ? 'rgb(30, 41, 59)'
                          : 'rgb(226, 232, 240)'
                          
                  }}
                          onClick={addPost}
              >Add Post
              </button>
              {/* Six Preview Section  */}
              <div className="mt-10">
                  <h1 className=" text-center mb-3 text-2xl">Preview</h1>
                <div className="section-container">
                    <div
                      className={`[&>h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5 
                      ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}

                      [&>h2]:text-[24px] [&>h2]:font-bold  [&>h2]:mb-2.5
                      ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}

                      [&>h3]:text-[18.72px] [&>h3]:font-bold  [&>h3]:mb-2.5
                      ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}

                      [&>h4]:text-[16px] [&>h4]:font-bold  [&>h4]:mb-2.5
                      ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}

                      [&>h5]:text-[13.28px] [&>h5]:font-bold  [&>h5]:mb-2.5
                      ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}

                      [&>h6]:text-[10px] [&>h6]:font-bold  [&>h6]:mb-2.5
                      ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}

                      [&>p]:text-[16px] [&>p]:mb-1.5
                      ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}

                      [&>ul]:list-disc  [&>ul]:mb-2
                      ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}

                      [&>ol]:list-decimal  [&>ol]:mb-10
                      ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                      [&>li]:list-decimal  [&>li]:mb-2
                      ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                      [&>img]:rounded-lg
                      `}
                       dangerouslySetInnerHTML={createMarkup(blogs.content)}>
                    </div>
                </div>
      </div >
          </div >
      </div >
  )
}

export default CreateBlog