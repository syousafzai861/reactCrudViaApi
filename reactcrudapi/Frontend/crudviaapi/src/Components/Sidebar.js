import React, { useState } from "react";
import '../App.css';
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Sidebar({children}) {
  const[Isopen, setIsopen] = useState(false);
  const toggle = ()=> setIsopen(!Isopen);
  const menuIcon = [
    {
      name: "Admin Login",
      path: "/Adminlogin",
      icon: <FaTh />,
    },
    {
      name: "User Login",
      path: "/Login",
      icon: <FaUserAlt />,
    },
    {
      name: "Register",
      path: "/Registration",
      icon: <FaShoppingBag />,
    },
    {
      name: "Productlist",
      path: "/productlist",
      icon: <FaThList />,
    },
    {
      name: "Comment",
      path: "/ReadForuser",
      icon: <FaCommentAlt />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="container">
      <div style={{width: Isopen ? "250px" : "45px" }} className="sidebar">
        <div className="top-sec">
          <h1 style={{display: Isopen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{marginLeft: Isopen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuIcon.map((item,index)=>(
           <NavLink to={item.path} key={index} className="link" activeclassName = "active">
            <div className="icon">{item.icon}</div>
            <div style={{display: Isopen ? "block" : "none" }} className="LINk-item">{item.name}</div>
           </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
