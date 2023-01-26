import React from 'react'
import "./Screen1.css";
import { FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-bootstrap';
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillBadgeArFill, BsQuestionCircle } from "react-icons/bs";
function Screen2({children}) {
    const menuItem = [
        {
            path:"/dashboard",
            name:"dashboard",
            icon: <AiOutlineMessage/>
        },
        {
            path:"/about",
            name:"About",
            icon: <FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon: <FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon: <FaCommentAlt/>
        },
        {
            path:"/list",
            name:"product list",
            icon: <FaThList/>
        },
        {
            path:"/product",
            name:"product ",
            icon: <FaShoppingBag/>
        },
        {
            path:"/product",
            name:"product ",
            icon2: <BsQuestionCircle/>
        },
        {
            path:"/product",
            name:"product ",
            icon3: <BsFillBadgeArFill/>
        },
        
    ]
  return (
    <div>
        <div className="sidebar">
            <div className="topsection">
                <h1 className='logo'>Logo</h1>
                <div className="bars">
                    {/* <FaBars/> */}
                </div>
                {
                 
                    menuItem.map((item,index)=>(
                        <NavLink  to={item.path} key={index} className="link" activeclassName ="active">
                            <div className="icon">{item.icon}</div>
                            <div className="icon1">{item.icon2}</div>
                            <div className="icon2">{item.icon3}</div>
                            {/* <div className="linktest">{item.name}</div> */}
                        </NavLink>
                     
                        
                    ))

                  
                }
                
            </div>
            <main>{children}</main>
        </div>

    </div>
  )
}

export default Screen2