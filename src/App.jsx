import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import Practice from './component/Practice'
import ApiCheckBox from './component/ApiCheckBox'
import MapAndFilter from './pages/MapAndFilter'
// import Register from './component/Register'
import { Outlet, Link } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <Register /> */}
       
         {/* <Practice /> */}
         {/* <ApiCheckBox /> */}
         <Outlet />
        
     </div>
    </>
  )
}

export default App
