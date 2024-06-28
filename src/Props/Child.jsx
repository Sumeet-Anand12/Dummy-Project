import React from 'react'

const Child = ({name, ChangeName}) => {
    // const handleChangeName=()=>{
    //     ChangeName("uday")
    // }
  return (
    <div>
         <h1>Child</h1>
         <h1>{name}</h1>
    <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={()=>ChangeName("uday")}>Changename</button>

    </div>
  )
}

export default Child