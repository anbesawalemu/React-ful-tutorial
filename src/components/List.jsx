import React from 'react';

function List() {
    const names=["asmee","tesfe","anbesaw"]
  return (
    <div>
      {names.map((name,index)=>(
        <h2 key={index}>{name}</h2>
      ))}
    </div>
  );
}

export default List;
