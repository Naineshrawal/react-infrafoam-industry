import React, { useState } from 'react'
import MyContext from './MyContext';

function MyState(props) {
    const [mode, setMode] = useState("light")
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
    <MyContext.Provider value={{mode, toggleMode}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
