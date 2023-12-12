import React, { useState } from 'react';
import { random } from 'lodash';

export default function Casino() {
  const [coins, setCoins] = useState(5);
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');

  const playCoin = () => {
    if (coins == 0) {
      alert('You do not have money');
      return;
    }

    setCoins(coins - 1);

    const number = random(1, 6); // Changed range to start from 1
    setImage(`../dice_images/dice${number}.jpg`);

    if (number == 5 || number == 6) {
      setStatus('success');
      setCoins(coins + 2);
    } else {
      setStatus('failed');
    }
  };

  return (
    <>
      {image !=''&&<img src={image} alt="dice" />} 
      <button onClick={playCoin}>Play</button> 
      <h3>you have {coins}coins</h3>
      {status!=''&&(status == 'success' ? <h2 style={{color:'green'}}>Success</h2> : <h2 style={{color:'red'}}>Failed</h2>)} {/* Fixed conditional rendering */}
    </>
  );
}
