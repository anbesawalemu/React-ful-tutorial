import React from 'react';

function Propss(props) {
  return (
    <div>
      <h1>{props.name} {props.age}</h1>
      {props.children}
    </div>
  );
}

export default Propss;
