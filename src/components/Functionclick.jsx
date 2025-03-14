import React from 'react';

function Functionclick() {
    const handlcick=()=>{
       console.log("Button click") ;
    }
  return (
    <div>
      <button onClick={handlcick}>clike me</button>
    </div>
  );
}

export default Functionclick;
