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
                "Authorization": "Bearer ee733f8597630a674bf04e33e9b52eaa9ffd36e7bda5f236e090176b3790f26dc8f2f168e526f69fb1d0579fb1ccc5c0aa71dae4b9c6ca67ecdf3f09473c0d3d28f7738d0f4c08916f6b815deaaea2ee13a68c0fc03bb0f57012c70ff47186143e4cccecde8eb1fca6573ceaf74b7f5392c60730ae06f4b0a99e0a142fe51a3c",
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
                "Authorization": "Bearer ee733f8597630a674bf04e33e9b52eaa9ffd36e7bda5f236e090176b3790f26dc8f2f168e526f69fb1d0579fb1ccc5c0aa71dae4b9c6ca67ecdf3f09473c0d3d28f7738d0f4c08916f6b815deaaea2ee13a68c0fc03bb0f57012c70ff47186143e4cccecde8eb1fca6573ceaf74b7f5392c60730ae06f4b0a99e0a142fe51a3c",
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
