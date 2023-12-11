import React, { useEffect,useRef, useState } from 'react';

export default function Favorite() {
  const inputRef = useRef();
  const [color, setColor] = useState('gray');
  const [counter, setCounter] = useState(-1);

  const changeColor = () => {
    setColor(inputRef.current.value);
  };
  useEffect(() => {
    setCounter(counter + 1);

  },[color])
 

  return (
    <div className='col-md-4 mx-auto d-flex'>
      <h2 style={{ color: color }}>Choose Your Favorite Color</h2>
      <select  ref={inputRef} onChange={changeColor} className='form-control'>
        <option value=''>Select an option</option>
        <option value='red'>Red</option>
        <option value='gold'>Gold</option>
        <option value='green'>Green</option>
        
      </select>
      <h3>{counter}</h3>
    </div>
  );
}
