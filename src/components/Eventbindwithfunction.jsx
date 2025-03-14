import React, { useState } from 'react';

function Eventbindwithfunction() {
    const[message,setmessage]=useState("hell")

    const changemassege=()=>{
        setmessage("GoodBye")
    }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changemassege}>  click me</button>
    </div>
  );
}

export default Eventbindwithfunction;
