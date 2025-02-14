//useEffect is used to update the document title whenever the count state changes.
//The second argument to useEffect is an array of dependencies. The effect will only re-run if one of the dependencies has changed since the last render.
//The cleanup function inside useEffect is optional and is used to clean up any side effects when the component unmounts or before the effect runs again.
//If you don't provide a second argument, the effect will run after every render. If you provide an empty array [], the effect will only run once after the initial render.
//import React, { useEffect, useState } from "react";

function UseEffectHook() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log('Component Did Mount');
        setTimeout(() =>{
            setCount((count + 1));
        },1000)
        return () =>{
            console.log('conponent did unmount')
        }

    },[])

    return(
    <>
    <h3>This is useEffect render {count}</h3>
     
    </>
    );
}

export default UseEffectHook