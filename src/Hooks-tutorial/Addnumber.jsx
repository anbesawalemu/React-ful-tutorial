import React, { useState } from 'react';

function Addnumber() {
    const[items,setitems]=useState([])
   

    const additem=()=>{
        setitems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={additem}>Add a number</button>
      <ul>
        {items.map(item=>( <li key={item.id}>{item.value}</li>))}
      </ul>
    </div>
  );
}

export default Addnumber;
