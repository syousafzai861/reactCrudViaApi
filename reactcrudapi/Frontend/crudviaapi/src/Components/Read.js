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
                "Authorization": "Bearer b706f1416f642dadd4bbd5e96dae954074ab815bd92e49e21f5f272ff68b8cb00ba0c517a3aee98017510d4035ca39cd18ba66b500b9170a868b40dc53211b97d7fa9d9e92e7bfd942522d645fdb2d34cef63ab19e4b3ff885ec8a5875b6ea9657d69bbee52dd021faaebac588a3f18a444208ba2db9b4b6706d5dd3b2090fb0",
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
                "Authorization": "Bearer b706f1416f642dadd4bbd5e96dae954074ab815bd92e49e21f5f272ff68b8cb00ba0c517a3aee98017510d4035ca39cd18ba66b500b9170a868b40dc53211b97d7fa9d9e92e7bfd942522d645fdb2d34cef63ab19e4b3ff885ec8a5875b6ea9657d69bbee52dd021faaebac588a3f18a444208ba2db9b4b6706d5dd3b2090fb0",
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
