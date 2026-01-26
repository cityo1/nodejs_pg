import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(response => {
        setData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data)

  return (
    <>
      <h2>Data From Server</h2>

      {data.map((a, b) => (
        <div key={b}>
          <h2>{a.username}</h2>
          <p>{a.email}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
