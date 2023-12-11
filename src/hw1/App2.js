import React, { useEffect,useRef, useState } from 'react';
import Color from './Color'
export default function App2() {
  
  const [color, setColor] = useState('gray');
  
const changeColor=(newColor)=>{
  setColor(newColor)
}


 

  return (
    <>
<h1 style={{color:color}}>WELCOME TO CUSTOM EVENT</h1>
<Color changeColor={changeColor}/>
</>
  );
}
