import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ReadForuser() {
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
                console.log("res", res.data.data)
                setdata(res.data.data)
            })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <table className="table my-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>

                {data.map((data) => {

                    return (<>
                        <tbody>
                            <tr>
                                <th scope="row">{data.id}</th>
                                <td>{data.attributes.name}</td>
                                <td>{data.attributes.email}</td>
                            </tr>
                        </tbody>
                    </>);
                })
                }
            </table>
        </>
    )
}

export default ReadForuser
