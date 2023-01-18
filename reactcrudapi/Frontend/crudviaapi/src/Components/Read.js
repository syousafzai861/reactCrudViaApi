import React from 'react'
import axios from 'axios';
const Read = () => {
    function getData(){
        axios({
            method: 'get',
            url: 'http://localhost:1337/api/cruds',
            headers: {
                 "Authorization":"Bearer 38cc79f4e24dd0a7ec2d807570f2e72ac54c4d68a7c9588385029da521fd6147d7e2b971a64ae4282bf6b758cc1d2206eacada48585f7c8773fd06a6b2a9bada17591fbb136798ccf84650badaf3a4b851860b59d8eb3bb2f4dea8ea2f5795067b1c9db50d2b3ddcef112ced2f9cec0ccdd83aac61f47bb8df7d04b310a060af",
                // "Content-Type": "application/json"
            }
          })
          .then((res)=>{
            console.log(res)
          })
        }
     getData();
  return (
    <>
      <table className="table my-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>name</td>
      <td>@email</td>
      <td><button className="btn btn-success">Edit</button></td>
      <td><button className="btn btn-danger">Delete</button></td>

    </tr>
   
   
  </tbody>
</table> 
    </>
  )
}
export default Read
