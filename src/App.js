import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { PSpinner } from './spinners.js';
const WORKING_URL = 'https://randomuser.me/api/';
// const NOT_WORKING_URL = 'https://www.aesop.com/au/api/v1/nav/shop';

const rest = axios.create({
  baseURL: WORKING_URL,
  responseType: 'text'
});


 const MainComponent = ({ data }) => {
  return !data ? <PSpinner/> : <div>{JSON.stringify(data)}</div>
 }


function App() {
  const [data, setData] = useState(false);
 
  useEffect(() => {
  if(!data ){
    rest.get('/', {
          params: {
            results: 1,
            inc: 'name,email'
          }
        }).then(res => {
          setData(res);
          console.log(data);
        });
      }
    });

return <MainComponent data={data}/>;
}

export default App;
