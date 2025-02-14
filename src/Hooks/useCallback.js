//The useCallback hook is a built-in React hook that returns a memoized callback function. It is useful for optimizing performance by preventing unnecessary re-renders of components. When you pass a function as a prop to a child component, the child component may re-render every time the parent component re-renders, even if the function hasn't changed. useCallback helps to avoid this by memoizing the function, so it only changes if one of its dependencies has changed.

//In the example below, we have a Counter component that uses the useState hook to manage a count state. We also have a function increment that increments the count state by 1. We use the useCallback hook to memoize the increment function, so it only changes when the count state changes.
import React, { useState, useCallback } from 'react';

const useCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>useCallback Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
        </div>
    );
};

export default useCallbackHook;
