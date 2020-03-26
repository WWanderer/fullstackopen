import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter.js'
import Countries from './components/Countries.js';


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(resp => {
        setCountries(resp.data)
      })
  }, [])

  //console.log(countries[0])
  return (
    <div>
      <Filter setFilter={setFilter}></Filter>
      <h2>Countries</h2>
      <Countries countries={countries} filter={filter} setFilter={setFilter}></Countries>
    </div>
  )
}

export default App;
