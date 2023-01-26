import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
// import login from "../Components/Login";

const Privateroute =() => {

    // let login = true;
    if(localStorage.getItem("identifier")){
        return <Outlet/>
    }
    else{
        <Navigate to={"/login"}  />
    }
   }
export default Privateroute
