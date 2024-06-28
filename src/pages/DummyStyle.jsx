import React, { useState } from 'react'

const DummyStyle = () => {

    const[theme, setToggle]=useState(false)

    const style={
        internal:{
            color:"blue"
        },
        light:{
            backgroundColor:"white",
            color:"black"
        },
        dark: {
            color:"white",
            backgroundColor:"black",
        },
    }

      const ChangeState=()=>{
        console.log("hello")
        setToggle(!theme);
      }


  return (
    <div className='external'>
        <div style={theme?style.dark:style.light}>
            <h1>External</h1>
            <h1>internal</h1>
            <h1>Inline</h1>
        </div>
            <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={ChangeState}>Toggle</button>
    </div>
  )
}

export default DummyStyle