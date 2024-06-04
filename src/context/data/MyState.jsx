import React, { useEffect, useState } from 'react'
import MyContext from './MyContext';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState("light")
    const [searchKey, setSearchKey] = useState("")
    const [loading, setLoading] = useState(false)
    const [getAllBlog, setGetAllBlog] = useState([])

    function getAllBlogs() {
      setLoading(true);
      try {
          const q = query(
              collection(fireDb, "blogPost"),
              orderBy('time')
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
              let blogArray = [];
              QuerySnapshot.forEach((doc) => {
                  blogArray.push({ ...doc.data(), id: doc.id });
              });
              
              setGetAllBlog(blogArray)
              // console.log(productsArray)   
                       setLoading(false)
  
          });
          return () => data;
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }

  useEffect(()=>{
    getAllBlogs()
  },[setGetAllBlog])

    const toggleMode = ()=>{
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "black"

        }
        else{
            setMode("light")
            document.body.style.backgroundColor = "white"
        }
    }
  return (
    <MyContext.Provider value={{
      mode, 
      toggleMode, 
      searchKey, 
      setSearchKey, 
      loading, 
      setLoading,
      getAllBlog
      }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
