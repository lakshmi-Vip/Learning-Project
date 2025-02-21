/*
what is useMemo?
The UseMemoHook component demonstrates the use of the useMemo hook in React. 
The useMemo hook is used to memoize the result of a function, preventing unnecessary calculations on every render. 
This can help optimize performance, especially for expensive calculations.

Co
*/
//give example based on the defination above

import React, { useState, useMemo } from 'react';
// import ProductSearch from './UseMemo/productSearch';

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
          {/* <ProductSearch /> */}
            
        </div>
    )
}

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
}

export default UseMemoHook;