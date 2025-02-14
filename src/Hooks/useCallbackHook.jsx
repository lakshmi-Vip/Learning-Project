/*
what is useCallback?
- useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
- It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
- It is used to optimize performance for functions that are passed as props to child components.
- It is used to prevent unnecessary renders in functional components.
- It is used to prevent the recreation of the same function on every render.

*/
//give example based on the defination above

import React, { useState, useCallback } from 'react';

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => { //useCallback is used to prevent the recreation of the same function on every render.
        setCount(count + 1); 
    }, [count]);
    return (
        <div>
            <h1>UseCallback Hook</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseCallbackHook;


