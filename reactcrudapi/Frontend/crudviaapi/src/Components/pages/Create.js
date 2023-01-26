import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
    const handleSubmit = ()=>{
      // e.preventDefault();
      axios({
        method: 'post',
        url: 'http://localhost:1337/api/cruds',
        data:{
          "data":{
              "name":name,
              "email":email
          }
       },
        headers: {
             "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjc0MTI5MDMxLCJleHAiOjE2NzY3MjEwMzF9.oJpCdIC0Ei2QYgi6z8uvyrGjaBllcmpFqfZ1Ghdwbbg",
            // "Content-Type": "application/json"
        }
      })
      
        history("/read");
      
      
    }
  return (
    <div>
      <>
      <div className="adddiv">
      <div className="d-flex justify-content-between">
        <h4>ADD DATA</h4>
        <Link to="/read">
        <button className="btn btn-primary btn-sm">SHOW DATA</button>
        </Link>
      </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e)=>setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        </div>
      </>
    </div>
  );
};

export default Create;
