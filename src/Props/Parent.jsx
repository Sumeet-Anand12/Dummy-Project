import React, { useState } from 'react'
import Child from './Child'
// import InlineStyle from '../pages/InlineStyle'
import Form from '../pages/Form'
import DummyStyle from '../pages/DummyStyle'
import Uncontrolled from '../component/Uncontrolled'
import Quill from '../component/Quill'


const Parent = ({count}) => {

    const[name, setName]=useState('nishant')
      const ChangeState=(value)=>{
        setName(value)
      }

  return (
    <>
    <div>Parent</div>
    
          <Child name={name}  count={count} ChangeName={ChangeState} />
    {/* <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={ChangeState}>Changename</button> */}

    {/* <InlineStyle /> */}
       <Form />
        <DummyStyle />
        <Uncontrolled />
        <Quill />

    </>
  )
}

export default Parent