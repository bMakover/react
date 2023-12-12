import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TvItem from './TvItem';

export default function AppTv() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = "http://fs1.co.il/bus/tv.php";
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
      <h1>List of VOD:</h1>
      <div className="row g-3">
        {ar.map(item => {
          return(
            <TvItem key={item.descrption} item={item} />
          )
        })}
      </div>
    </div>
  )
}