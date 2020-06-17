import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { MainComponent } from './MainComponent';

const WORKING_URL = 'http://localhost:3010/';
// const NOT_WORKING_URL = 'https://www.aesop.com/au/';

const rest = axios.create({
    baseURL: WORKING_URL,
    responseType: 'text',
});

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!data) {
            rest.get('/api/v1/nav/shop/').then(res => {
                console.log(res);
                setData(res.data);
            });
        }
    });

    return !data ? <CircularProgress /> : <MainComponent data={data} />;
}

export default App;
