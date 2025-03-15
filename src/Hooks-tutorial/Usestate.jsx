import React, { useState } from 'react';

function Usestate() {
    const [count,setcount]=useState(0)


    const increment=()=>{
        setcount(count+1)
    }
  return (
    <div>
      <button onClick={increment}>count:{count}</button>
    </div>
  );
}

export default Usestate;
