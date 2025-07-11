import React from 'react'
import { useReducer } from 'react';

const Usereduce =() =>{

  const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': // Increase the count by 1
      return { count: state.count + 1 };
    case 'decrement': // Decrease the count by 1
      return { count: state.count - 1 };
    case 'double': // Double the count
      return { count: state.count * 2 };
    default:
      return state; // Return the current state if no match
  }
  
};
const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    
    <div>
       <div>
      <p>Count: {state.count}</p> {/* Display the current count */}
      
      {/* Buttons to dispatch actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button> {/* Increment */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button> {/* Decrement */}
      <button onClick={() => dispatch({ type: 'double' })}>*</button> {/* Double */}
    </div>
    </div>
  )
}

export default Usereduce
