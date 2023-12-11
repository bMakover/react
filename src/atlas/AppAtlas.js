import React, { useEffect, useState } from 'react'
import CoinItem from './CoinItem';
import axios from 'axios';
export default function AppCoins() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApiCountryCode = async(_countryCode) => {
    let url = "https://restcountries.com/v3.1/alpha/"+_countryCode;
    try{
      let resp = await axios.get(url);
  
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err);
      alert("There problem, come back later")
    }
  }

  return (
    <div className='container'>
      <h1>List of coins:</h1>
      <div className="row g-3">
        {ar.map(item => {
          return(
            <CoinItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}
