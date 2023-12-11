import React from 'react';

export default function Color(props) {



 

  return (
    <>
<button onClick={()=>(props.changeColor("red"))}>Red</button>
<button onClick={()=>(props.changeColor("blue"))}>Blue</button>
<button onClick={()=>(props.changeColor("white"))}>White</button>


</>
  );
}
