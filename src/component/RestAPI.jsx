import axios from 'axios'
import React, { useState } from 'react'

const RestAPI = () => {

    const[data, setData]=useState({
        
    })

    
    const PostData= async ()=>{
        await axios.post('https://667a9b29bd627f0dcc8fb58e.mockapi.io/user',{
            name:data.name,
            age:data.age,
            hobby:data.hobby
            
        });
    }


    const handleChange =(e)=>{
          const {name, value}=e.target;
        //   console.log(name, value)
        setData((preState)=>({
            ...preState,
            [name]:value

        }));

    }
    console.log(data)
    
  return (
    

    <div>
        <h1>Rest API</h1>
        <div>

        <div className="form-group">
                <label htmlFor="email" className="form-label" >Age</label>
                <input type='text' className="form-control w-[50%]" name="age" onChange={handleChange}   />
            </div>

           
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text' className="form-control w-[50%]" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text' className="form-control w-[50%]" name="hobby" onChange={handleChange} />
                </div>

        <button className="btn" onClick={PostData}>Submit</button>
        </div>
    </div>
  )
}

export default RestAPI