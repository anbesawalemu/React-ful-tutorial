import React, { useState } from 'react';

function Hooksitem() {
    const [items,setitems]=useState(["banana","tomatom","carot"])
  return (
    <div>
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hooksitem;
