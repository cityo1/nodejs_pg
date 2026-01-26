import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/visitors')
      .then(response => {
        setData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/revenue')
      .then(response => {
        setRevenue(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching revenue:', error);
      });
  }, []);

  console.log(data)
  console.log(revenue)

  return (
    <>
    <h2>Visitors From Server</h2>
    {data.map((visitor, idx) => (
        <div key={idx}>
          <h2>month:{visitor.month}</h2>
          <p>new_customer:{visitor.new_customer}</p>
          <p>loyal_customer:{visitor.loyal_customer}</p>
          <p>unique_customer:{visitor.unique_customer}</p>
        </div>
      ))
      }
      <h2>Revenue From Server</h2>
    {revenue.map((revenue, idx) => (
        <div key={idx}>
          <h2>day:{revenue.day}</h2>
          <p>online:{revenue.online}</p>
          <p>offline:{revenue.offline}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
