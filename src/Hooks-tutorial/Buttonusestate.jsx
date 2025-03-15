import React, { useState } from 'react';

function Buttonusestate() {
  const initial=0
  const [count,setcount]=useState(initial)

  const incrementby5=()=>{
    for(let i=0;i<5;i++){
      setcount(preveCount => preveCount+1)
    }
  }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setcount(preveCount=>preveCount+1)}>+</button>
      <button onClick={()=>setcount(preveCount=>preveCount-1)}>-</button>
      <button onClick={()=>setcount(initial)}>0</button>
      <button onClick={incrementby5}>increment to 5</button>
    </div>
  );
}

export default Buttonusestate;

