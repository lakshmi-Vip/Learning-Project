/*
what is useMemo?
useMemo is a hook that memorizes the output of a function. It is similar to useCallback, 
but it is used for functions that return a value, not a function.
useMemo is used to optimize performance for functions that return a value.
It is used to prevent unnecessary calculations on every render.
It is used to prevent the recreation of the same value on every render.

*/
//give example based on the defination above

import React, { useState, useMemo } from 'react';
import ProductSearch from './UseMemo/productSearch';

const UseMemoHook = () => {
    const [count, setCount] = useState(0);

    const doubleNumber = useMemo(() => {
        return slowFunction(count);
    }, [count]);
// useMemo(() =>{},[])
    return (
        <div>
            <h1>UseMemo Hook</h1>
            <h2>{doubleNumber}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          <ProductSearch />
            
        </div>
    )
}

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
}

export default UseMemoHook;