import React, { useEffect, useState } from 'react';
import axios from 'axios';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST', 'OPTIONS');

function DataFetch() {
    const [ values, setValues ] = useState([])
    useEffect(()=>{
        const url = `http://localhost:5000/api/statistics`
        axios.get(url, {
            // mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers
          })
            .then(response => {
                console.log(response.data.statistics)
                // return response.data.statistics.json
                setValues(response.data.statistics)
            })
            // .then(data => data = setData(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <ul>
                {values.map(value =>(
                    <li key={Math.random()}>{value.Time} <br/>{value.Value}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetch;
