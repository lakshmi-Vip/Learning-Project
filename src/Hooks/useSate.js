import React, { useState }  from "react";

function UseSateHook() {
    const [count,setCount] = useState(0);

    const Add = () => {
        setCount ((prevCount => prevCount + 1));
    }

    return(
        <>
        <h3>useEffect</h3>
        <p>Count: {count}</p>
        <button onClick={Add}>Add</button>
        </>
    );
}

export default UseSateHook;
