import React from 'react';
import List from './List';

function Namelist() {
    const person=[
        {
            id:1,
            name:"anbesaw",
            age:24,
            skill:"web develop"
        },
        {
            id:2,
            name:"tesfaye",
            age:25,
            skill:"front end web development"
        },
        {
            id:3,
            name:"Gedamu",
            age:26,
            skill:"back end web develop"
        }
    ]
  return (
    <div>
      {
        person.map((name,id)=>(
           <h2 key={id}> {name.id}    {name.name} {name.age} {name.skill}</h2> 
        ))
      }
    </div>
  );
}

export default Namelist;
