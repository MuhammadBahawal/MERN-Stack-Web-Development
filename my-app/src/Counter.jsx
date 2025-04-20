import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // useState is a hook that allows you to add state to a functional component. 
    // It returns an array with two elements: the current state value and a function to update it.
    const [Reverse, setReverse] = useState(0);


    return (
        <div>
            <h1>counter: {count + Reverse}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setReverse(Reverse - 1)}>Reverse</button>
        </div>
    );
}

export default Counter
