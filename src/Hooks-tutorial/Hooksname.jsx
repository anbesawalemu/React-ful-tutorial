import React, { useState } from 'react';

function Hooksname() {
    const [name,setname]=useState({fname: "", lname:""})

    
    
  return (
    <div>
      <form action="">
       
        <input type="text" value={name.fname} placeholder='enter first name' onChange={(e)=>setname({...name,fname:e.target.value})} /><br />
        
        <input type="text" value={name.lname} placeholder='enter last name' onChange={(e)=>setname({...name,lname:e.target.value})}/>
        <h2>the first name is :{name.fname}</h2>
        <h2>the last name is :{name.lname}</h2>
       
      </form>
    </div>
  );
}

export default Hooksname;
