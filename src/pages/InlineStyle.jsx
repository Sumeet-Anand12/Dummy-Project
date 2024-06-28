// import React, { useState } from 'react'

// const InlineStyle = () => {

//     const[num, setNum]=useState([])
//     const[total, setTotal]=useState()

//   const handleInput=(e,index)=>{
//     const {value} =e.target;
//     // console.log(e.target.value)
//        const newValue=[...num, value]          
//         setNum(newValue)
//   }
//   const ChangeState=()=>{
//     // In Array number in String so converting String Number into the number.
//     const numAsNumbers = num.map(item => parseFloat(item));
//     // Ensure all inputs are valid numbers
//     if (numAsNumbers.some(isNaN)) {
//         alert('Please enter valid numbers');
//         return;
//       }
   
//    let total= numAsNumbers.reduce((acc,curr)=>acc/curr);
//      setTotal(total);
//   }


//   return (
//   <div>
//     <div>
//         <h1>Inline Style</h1>
//         <h1>{total}</h1>
//         <input type="text" name='number'  className='border-2 border-black h-10 w-60 mx-4 pl-4' placeholder='give Input' onChange={handleInput}/>
//         <input type="text" name='number' className='border-2 border-black h-10 w-60 mx-4 pl-4' placeholder='give Input' onChange={handleInput}/>
//                <button className='border-2 w-32 py-3 mx-4 my-4 rounded-lg' onClick={ChangeState}>ChangAdd</button>

//     </div>
//   </div>
//   )
// }

// export default InlineStyle