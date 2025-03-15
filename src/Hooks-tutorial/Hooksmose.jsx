import React, { useEffect, useState } from 'react';

function Hooksmose() {
   const [x,setx] =useState(0)
   const [y,sety]= useState(0)
   const logMosePosition=(e)=>{
      console.log('mose event')
      setx(e.clientx)
      sety(e.clienty)
   }
   useEffect(()=>{
    console.log('useeffect called')
    window.addEventListener('mousemove',logMosePosition)
   },[])
  return (
    <div>
      <h1>hooks x-{x}  y-{y}</h1>
    </div>
  );
}

export default Hooksmose;
