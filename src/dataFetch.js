import React, { useEffect } from 'react';
import axios from 'axios';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST', 'OPTIONS');

function DataFetch() {
    const url = `http://localhost:5000/api/statistics`
    useEffect(()=>{
        axios.get(url, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers
          })
            .then(res => {
                const data = res.data.statistics
                console.log(data)
            })
            .then(err => {
                console.log(err)
            })
    })
    
    return (
        <div>

        </div>
    )
}

export default DataFetch;
