import React, { useState } from 'react';

function Messg() {
   const[message,setmessage]= useState("wellcome to subscribe");

   const changeMessage=()=>{
    setmessage("Thank you for subscribing");
   }
  return (
    <div>
     <h1>{message}</h1>
     <button onClick={changeMessage}>subscribe</button>
    </div>
  );
}

export default Messg;
