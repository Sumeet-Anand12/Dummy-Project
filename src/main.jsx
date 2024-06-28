import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MapAndFilter from './pages/MapAndFilter'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './component/Login.jsx';
import Home from './pages/Home'
import State from './pages/State.jsx'
import Parent from './Props/Parent.jsx'
import RestAPI from './component/RestAPI.jsx'
import SearchSelect from './component/SearchSelect.jsx'
// import Register from './component/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
 
  children: [

    {
      path: "/",
      element: <Home />, // Home component as the default child route
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/map-filter",
      element: <MapAndFilter />,
    },
    {
      path: "/state",
      element: <State/>,
    },
    {
      path: "/parent",
      element: <Parent/>,
    },
    {
      path: "/rest-api",
      element: <RestAPI />,
    },
    {
      path: "/search-select",
      element: <SearchSelect />,
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ],
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);

