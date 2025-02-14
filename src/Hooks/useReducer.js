//useReducer: useReducer hook is similar to useState hook, it allows custom logic for the state, when we are using complex state logic that time
//we can use the useReducer hook, it will have reducer function and initialState as a parameter.
//Syntax: const[state, dispatch] = useReducer(reducer, initialState)
//State: it will represent the initial state
// dipatch: is update the state value and it will trigar the rerender,dispatch function  send the action to the reducer
//reducer: is a function it will have the logic of how state get update, it takes state and action as argument and returns the next state.
//InitialState: will have the initialvalue

import { React, useReducer } from 'react'
//import { ReactDOM } from 'react-dom/client'

const initialState = {count: 0};

const reducer = (state, action) => {
   switch(action.type){
       case 'increment':
           return({count: state.count + 1});
        case 'decrement':
            return({count: state.count - 1});
        case 'reset':
            return({count: state.count})
        default:
            throw new Error()
   }
}

const UseReducerHook = () =>{
   const[state, dispatch] = useReducer(reducer, initialState);
   return(
       <>
       <p>Reducer Hook Count: {state.count}</p>
       <button onClick = {() =>{dispatch({type: 'increment'})}}>Increment</button>
       <button onClick= {()=>{dispatch({type:'decrement'})}}>Decrement</button>
       <button onClick={() => {dispatch({type:'reset'})}}>Reset</button>
       </>
   )
}

export default UseReducerHook;