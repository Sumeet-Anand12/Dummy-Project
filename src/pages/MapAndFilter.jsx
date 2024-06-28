import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// const data=fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((d)=>(
  // className='bg-[#fff] border-2 py-2 px-3 w-40 mx-4 my-4 rounded-md'

const MapAndFilter = () => {
const[users, setUser]= useState([])
const [error, setError] = useState(null);
const[number, setNumber] =useState([1,2,3,4,5,6,7])
const [originalNumbers, setOriginalNumbers] = useState([]);



const fetchData =()=>{
    let data=   fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
      if(!res.ok){
        throw new Error('Network response was not ok ' + res.statusText);
      }
          return res.json();
       }).then((data)=>{

         setUser(data)
         setError(null);
       }
       ).catch((err)=>{
        console.log('Something went wrong:', err);
        setError(err.message);
       })  
}
   useEffect(()=>{
    fetchData();
   
   }, [])

  const mapData =()=>{
         const filterData=users.filter((user)=>(
           
           user.id<5
         ))
         setUser(filterData)

  }
  const AllmapData=()=>{
    fetchData();
  }
       const NumberMapped =()=>{
              setOriginalNumbers([...number]);
              console.log(originalNumbers)
            let data=  number.filter((num)=>num>4).map((num)=>{
              
               return num*num;
       })
       setNumber(data);
       }

         const AllNumber =()=>{

          setNumber(originalNumbers)
         }


  return (
    <>
      <div>MapAndFilter</div>
      <Link to="/">Home Page</Link>
      <div className=''>
      <ol className='flex flex-col'>
        {
          users.slice(0, 10).map((user, index)=>(
            <div className='bg-[#fff] border-2 py-2 px-3 w-40 mx-4 my-4 rounded-md' key={index}>
           <div className='flex'>
            <p>{`${user.id}  ${user.name}`}</p>
           
           </div>

            <p>{user.username}</p>
            </div>
          ))
        
        }
        </ol>
       
               
      </div>
      <button className='border-2 py-1 px-6 mx-4 my-4' onClick={mapData}>See Id</button>
      <button className='border-2 py-1 px-6 mx-4 my-4' onClick={AllmapData}>See All</button>

      <div className=''>
      <ol className='flex flex-col'>
        {
          number.map((number, index)=>(
            <div className='bg-[#fff] border-2 py-2 px-3 w-40 mx-4 my-4 rounded-md' key={index}>
           <div className='flex'>
            <p>{`${number}`}</p>
           
           </div>
            </div>
          ))
        
        }
        </ol>
       
        <button className='border-2 py-1 px-6 mx-4 my-4' onClick={NumberMapped}>NumberMapped</button> 
        <button className='border-2 py-1 px-6 mx-4 my-4' onClick={AllNumber}>All Number</button> 
      </div>
    </>
  )
}

export default MapAndFilter