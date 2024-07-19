import React, { useEffect, useState } from "react";

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