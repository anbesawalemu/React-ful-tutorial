import React from 'react';

function Childcomponent(props) {
  return (
    <div>
      <button onClick={props.greethandler}>Greet parent</button>
    </div>
  );
}

export default Childcomponent;
