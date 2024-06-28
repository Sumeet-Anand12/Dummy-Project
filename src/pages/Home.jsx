import React from 'react'
import MapAndFilter from './MapAndFilter'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
         <h1>Home</h1>
        <div className='flex flex-col gap-2'>
        
        <Link to="/login">Login</Link>
        <Link to="/map-filter">Map and Filter</Link>
        <Link to="/state">State</Link>
        <Link to="/parent">Parent</Link>
        <Link to="/rest-api">Rest API</Link>
        <Link to="/search-select">Search Select</Link>
       
        </div>



    </div>
  )
}

export default Home