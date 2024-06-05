import React, { useEffect, useState,  } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import MyContext from '../../context/data/MyContext';
import Comments from '../comments/Comments';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';



const BlogPage = () => {
    
    useTitle("Blog")

    const context = useContext(MyContext)
    const {getAllBlog, mode, loading} = context
    
    
    const [fullName, setFullName] = useState("")
    const [commentText, setCommentText] = useState("")
    const [allComment, setAllComment] = useState([])
    

    const {id} = useParams() 
    const params = useParams()
    let blog =  getAllBlog.find(blog=>blog.id === id)


    const addComment = async () => {
        const commentRef = collection(fireDb, "blogPost/" + `${params.id}/` + "comment")
        try {
          await addDoc(
            commentRef, {
            fullName,
            commentText,
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
          toast.success('Comment Add Successfully');
          setFullName("")
          setCommentText("")
        } catch (error) {
            alert("failed")
            toast.error("failed")
          console.log(error)
        }
      }

    const getcomment = async () => {
        try {
          const q = query(
            collection(fireDb, "blogPost/" + `${params.id}/` + "comment/"),
            orderBy('time')
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
            let productsArray = [];
            QuerySnapshot.forEach((doc) => {
              productsArray.push({ ...doc.data(), id: doc.id });
            });
            setAllComment(productsArray)
            console.log(productsArray)
          });
          return () => data;
        } catch (error) {
          console.log(error)
        }
      }
      
      useEffect(() => {
        getcomment()
      }, []);
        
        
    
    function createMarkup(c) {
        return { __html: c };
      }
     
     

     


  return (
    <section className='section-container'>
        
        {blog && !loading ?

            <div >
                <Link className='flex justify-center items-center gap-1 bg-gray-400 w-32 rounded-xl mt-4' to='/blog'>
                    <span className='font-bold text-xl '>	&#x2B05;</span>
                    <p className='text-[#e3e3ff] hover:text-[#5d5dea]'>Go Back</p>
                </Link>
                <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center my-10'>{blog.blogs.title}</h1>
                <div className='px-4 sm:px-6 md:px-10 lg:px-20'>
                    <img className='w-full mx-auto'  src={blog.thumbnail} alt="" />
                    <div className='flex items-center gap-3 text-[#929292] '>
                        <p className='font-RobotoCondensed capitalize font-medium '>{blog.blogs.category}</p>
                        <div className='flex gap-1'>
                            <img width='14px'  src="images/time-gray.svg" alt="hours" />
                            <span className='text-sm'>{blog.date}</span>
                        </div>
                    </div>
                </div>
                <div className="section-container mt-10">
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
                            dangerouslySetInnerHTML={createMarkup(blog.blogs.content)}>
                            </div>
                        </div>

                
            </div>
            :
            <div className='flex justify-center'><img src="images/loading-icon.svg" alt="loading-icon" /></div>
        }
        <Comments
         addComment={addComment}
         commentText={commentText}
         setCommentText={setCommentText}
         fullName = {fullName}
         setFullName = {setFullName}
         allComment = {allComment}

        />
    </section>
  )
}

export default BlogPage
