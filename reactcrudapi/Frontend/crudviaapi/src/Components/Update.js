import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Update = () => {
  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const history = useNavigate();
  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
  }, []);
 
  function handleUpdate(){
    axios({
        method: 'put',
        url: `http://localhost:1337/api/cruds/${id}`,
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
    <>
      <h4 className="my-3">UPDATE FORM</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary my-3" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
