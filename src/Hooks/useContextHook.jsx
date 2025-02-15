/* what is useContext hook?
- useContext is a hook that allows you to use the context in functional components.
- It accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
- The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
- When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.
*/

// import React, { useContext } from 'react';
// import ContextData from './useContext';

// const UseContextHook = () => {
//     const data = useContext(ContextData);
//     return (
//         <div>
//             <h1>UseContext Hook</h1>
//             <h2>{data}</h2>
//         </div>
//     )
// }

// export default UseContextHook;


//useContex(): is way to maintain state globally, is used to comsume value from react context.
//Context provide a way to pass data through the componet tree without passing props manually at each level.
import { React, createContext} from "react";
import ChildContextHook from "./childContextHook";

export const UserContext = createContext();
export const ChannelContext = createContext();

function UseContextHook() {

    return(
    <>
    <h5>useContext Hook</h5>
    <UserContext.Provider value={'Laki'}>
        <ChannelContext.Provider value={'Bengaluru'}>
         <ChildContextHook />
        </ChannelContext.Provider>
    </UserContext.Provider>
    </>
    );
}

export default UseContextHook;



