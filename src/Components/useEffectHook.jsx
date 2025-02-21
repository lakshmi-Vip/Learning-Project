/*
what is useEffect?
useEffect is a hook that allows you to perform side effects in function components.
 It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
    useEffect is called after the component is rendered to the screen.
    It is a function that takes two arguments, a callback function and an array of dependencies.
    The callback function is the side effect. It is called after the component is rendered to the screen.
    The array of dependencies is an optional argument. It is used to tell React when to call the callback function.
    If the array of dependencies is empty, the callback function is called after the first render.
    If the array of dependencies is not empty, the callback function is called when any of the dependencies change.
    If there is no array dependencies, the callback function is called after every render.
*/
//create example for use effect that it should perfoem all side effects and also show the use of array of dependencies and clean up with all 3 life cycle methods
import React, { useState, useEffect } from 'react';
// import ApiEffect from './UseEffect/apiEffect';
// import SubScriptionEffect from './UseEffect/subScriptionEffect';

function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect called');
        document.title = `You clicked ${count} times`;

        return () => {
            console.log('componentWillUnmount');
        }
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {/* <div>
                <ApiEffect />

                <br />
                <SubScriptionEffect />
            </div> */}
        </div>
    )
}

export default UseEffectHook;