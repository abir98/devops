import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [userName, setUserName] = useState('')
  useEffect(() => {
    getNames();

  }, [])
  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response)
    setUserName(response.data)

  }
  return (
    <>
      <h1> Hello world , I am Abir ghribi </h1>
    </>

  );

}
export default App;
