import React, { useState } from 'react'

const Form = () => {

    const[name, setName]=useState({})

    const handleInput=(event)=>{
        const { name, value } = event.target;
        setName((prevState)=>({
            ...prevState,
            [name]:value
        }));
    }
    console.log(name)

      
   const submit=(e)=>{
        e.preventDefault();
        console.log(name)
   } 
    
  return (
    <form action="" onSubmit={submit}>
    <div>
        <h1>Form</h1>
        <input type="text" name="name"  className='border-2 border-black h-10 w-60 mx-4 pl-4' placeholder='give Input' onChange={handleInput}/>
        <input type="number" name='age'  className='border-2 border-black h-10 w-60 mx-4 pl-4' placeholder='give Input' onChange={handleInput}/>
        <input type="date" name='dob'  className='border-2 border-black h-10 w-60 mx-4 pl-4' placeholder='give Input' onChange={handleInput}/>
        <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' >submit</button>
    </div>
    </form>
  )


}

export default Form