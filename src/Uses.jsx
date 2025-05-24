import React, { useState } from 'react'

const Uses = () => {
        const [count,setCount]=useState(0);

        const increment=() =>{
            setCount(count+1);
        };

        const decrement =() =>{
            setCount(count-1);
        };

        
  return (
    <div className="counte-container">
        <h1> counter : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
};


export default Uses