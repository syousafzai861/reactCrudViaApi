import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ReadForuser() {
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
                console.log("res", res.data.data)
                setdata(res.data.data)
            })
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
        <h1>DASHBOARD</h1>
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
