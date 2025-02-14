//what is useState?
//useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
//  In this example, count is the state variable, and setCount is the function to update it.
import React, { useState }  from "react";

function UseSateHook() {
    const [count,setCount] = useState(0);

    const Add = () => {
        setCount ((prevCount => prevCount + 1));
    }

    return(
        <>
        
        <p>UseState Count: {count}</p>
        <button onClick={Add}>Add</button>
        </>
    );
}

export default UseSateHook;
