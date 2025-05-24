import React from 'react';
import child from './child';

const parent = () => {
    const parantName='John';
  return (
    <div>
       <h1>Welcome to React,{parantName}</h1> 
       <child name={parantName}/>
    </div>
  );
};

export default parent;