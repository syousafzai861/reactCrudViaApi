import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const Read = () => {
    const [data, setdata] = useState([]);
    function getData() {
        axios({
            method: 'get',
            url: 'http://localhost:1337/api/cruds',
            headers: {
                "Authorization": "Bearer 9fb17e05713e39982b4e539f5d6ef3b2150bdfc5acfd1bf502107cbbb23879e1d5e4276a46a6e421fee3bc33ceb829abacf562fe406028128c02d28e89f79328d12ff8a53f092412915f17b6a78029bf3690d736272be4cbd849a53fe01cd1ac53fa21ba541eb6ad21c81b0ba8e65d45dadf47e1fd6418d7fe1067d457b4957c",
                // "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res.data)
                console.log("res",res.data.data)
                setdata(res.data.data)
            })
    }

    function handleDelete(id){
        axios({
            method: 'delete',
            url: `http://localhost:1337/api/cruds/${id}`,
            headers: {
                "Authorization": "Bearer 9fb17e05713e39982b4e539f5d6ef3b2150bdfc5acfd1bf502107cbbb23879e1d5e4276a46a6e421fee3bc33ceb829abacf562fe406028128c02d28e89f79328d12ff8a53f092412915f17b6a78029bf3690d736272be4cbd849a53fe01cd1ac53fa21ba541eb6ad21c81b0ba8e65d45dadf47e1fd6418d7fe1067d457b4957c",
                // "Content-Type": "application/json"
            }
        }).then(()=>{
            getData()
        })
    }
    useEffect(() => {
        getData();
    }, []);
    
    // function refresh(){
        
    //       console.log("i am clicked")
       
    // }

    function handleUpdate(id,name,email){
       localStorage.setItem("id",id);
       localStorage.setItem("name",name);
       localStorage.setItem("email",email);
    }

    return (
        <>
        <h1 className='header'>ADMIN DASHBOARD</h1>
        {/* <button id='btn' className="btn btn-warning" onClick={refresh}>Refresh</button> */}
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

                {data.map((data) => {
                    
                    return (<>
                        <tbody>
                            <tr>
                                <th scope="row">{data.id}</th>
                                <td>{data.attributes.name}</td>
                                <td>{data.attributes.email}</td>
                                <Link to="/Update">
                                <td><button className="btn btn-success btn-sm" onClick={()=>handleUpdate(data.id,data.attributes.name,data.attributes.email)}>Edit</button></td>
                                </Link>
                                <td><button className="btn btn-danger btn-sm" onClick={()=>handleDelete(data.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </>);
                })
                }
            </table>
        </>
    )
}
export default Read
