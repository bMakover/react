import React, { useEffect, useState } from 'react'
import CoinItem from './CoinItem';
import axios from 'axios';
export default function AppCoins() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    
    try{
      let resp = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': 'afaaee11-5e9d-442e-85c3-1f5741d59baa',
        },
      });
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
