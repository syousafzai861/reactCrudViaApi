import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
             "Authorization":"Bearer 38cc79f4e24dd0a7ec2d807570f2e72ac54c4d68a7c9588385029da521fd6147d7e2b971a64ae4282bf6b758cc1d2206eacada48585f7c8773fd06a6b2a9bada17591fbb136798ccf84650badaf3a4b851860b59d8eb3bb2f4dea8ea2f5795067b1c9db50d2b3ddcef112ced2f9cec0ccdd83aac61f47bb8df7d04b310a060af",
            // "Content-Type": "application/json"
        }
      })
      
        history("/read");
      
      
    }
  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default Create;
