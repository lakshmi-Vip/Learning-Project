/*
what is useReducer?
useReducer is a hook that is used for state management in React. It is an alternative to useState.
It is mostly used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
It is similar to the reducer function in JavaScript.

*/

//create example for useReducer

import React, { useReducer } from 'react';
import ShoppingCart from './UseReducer/shopingCart';
import FormState from './UseReducer/formState';
const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>UseReducer Hook</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <ShoppingCart />
            <FormState />
        </div>
    )
}

export default UseReducerHook;