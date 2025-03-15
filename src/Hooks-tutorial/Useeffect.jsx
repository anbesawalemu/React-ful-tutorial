import React, { useEffect, useState } from 'react';

function Useeffect() {
    const [count,setcount]=useState(0)
    const [name,setname]=useState('')

    useEffect(()=>{
        console.log("useeffect updating document title")
        document.title=`you clicked to ${count} times`
    },[count])
  return (
    
    <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
      <button onClick={()=>setcount(count+1)}>click me{count} times</button>
    </div>
  );
}

export default Useeffect;
