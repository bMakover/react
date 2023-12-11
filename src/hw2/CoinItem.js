import React from 'react';

export default function CoinItem(props) {

  
  let item=props.item;

 

  return (
    <div className='col-md-4'>
      <div className='shadow p-2 overflow-hidden h-100'>
        <img src={`${item.symbol}`} className='w-50 float-start me-2 border' alt={item.name}/>
        <h4>{item.name}</h4>
        <p>value: {item.block_reward_static}</p>

  
      </div>
    </div>
  );
}
