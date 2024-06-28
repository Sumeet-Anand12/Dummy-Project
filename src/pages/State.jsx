import React, { useState } from 'react'

const State = () => {

let[count, setIncrement]=useState(0)

let[array, setarray]=useState([
    {
        name:"sumit",
        age:26
    },
    {
        name:"Anand",
        age:27
    },
    {
        name:"Amit",
        age:26
    }
])
let[name, setname]=useState([
    {
        name:"sumit",
        age:26
    }
   
])
    const handleState =(e)=>{
        setIncrement(count + 1);
    //    window.alert('button clicked')

    }
    const DhandleState =(e)=>{
       
    //    window.alert('button clicked')
    if(count>0)
       setIncrement(count-1)

    }
    const ChangeState=()=>{
        setname([{name:'nishant'}])
    }


  return (
    <div>
        State Page
      <div>
      
        {
            name.map((array)=>(
              <div>{array.name}</div>
            ))
        }
        <h1 className='mx-20'>{count}</h1>
        {
          count>0?(
            <>
            <button className="border-2 w-32 py-3 mx-4 my-4 rounded-lg" onClick={handleState}>Increment</button>
            <button className="border-2 w-32 py-3 mx-4 my-4 rounded-lg" onClick={DhandleState}>Decrement</button>
            </>
            ):(
                          
                <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={handleState}>Increment</button>
               
            )
        }

             <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={ChangeState}>ChangeState</button>
            
      </div>


    </div>
  )
}

export default State