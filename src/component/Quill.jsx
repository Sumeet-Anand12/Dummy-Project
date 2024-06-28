import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Quill = () => {

    let data=`<p style="color:red">Herro1 </p>`
    let data1=`<p style="color:blue">Herro2 </p>`
    const [value, setValue] = React.useState('');


    const setQuil=(value)=>{
        console.log(value)
        setValue(value)
    }
  return (
    <div className='mb-10'>
        <div>
            {/* <h1 dangerouslySetInnerHTML={{__html:data}}></h1>
            <h1 dangerouslySetInnerHTML={{__html:data1}}></h1> */}
            <h1 dangerouslySetInnerHTML={{__html:value}}></h1>
        </div>
        <ReactQuill theme="snow"  onChange={setQuil} />
    </div>
  )
}

export default Quill