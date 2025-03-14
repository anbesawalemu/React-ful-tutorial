import React, { useState } from 'react';

function Countrewithfunction() {
    const [count,setcount]=useState(0);

    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
    const reset=()=>{
        setcount(0)
    }
  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default Countrewithfunction;
