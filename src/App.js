import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //https://coronavirus-19-api.herokuapp.com/countries

  const [listCases, setListCases]= useState([]);


  useEffect(() => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then((data) => {
      setListCases(data)
    })
    .catch(console.log)
  }, []);

  // country: "China"
  // cases: 80967
  // todayCases: 39
  // deaths: 3248
  // todayDeaths: 3
  // recovered: 71150
  // active: 6569
  // critical: 2136
  // casesPerOneMillion: 56

  return (
    <div className="App">
      <div className="divInput">
        <input type="text" placeholder="Search by country..."/>
      </div>
      <div className="divCards">
        {listCases.map((v) => (
          <div className="card">
            <div className="divCountry">{v.country}</div>
            <div className="divInfos">
              <div>Cases: {v.cases}</div>
              <div>Today Cases: {v.todayCases}</div>
            </div>
            <div className="divInfos">
              <div>Deaths: {v.deaths}</div>
              <div>Today Deaths: {v.todayDeaths}</div>
            </div>
            <div className="divInfos">
              <div>Recovered: {v.recovered}</div>
              <div>Active: {v.active}</div>
            </div>
            <div className="divInfos">
              <div>Critical: {v.critical}</div>
              <div>PerOneMillion: {v.casesPerOneMillion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
