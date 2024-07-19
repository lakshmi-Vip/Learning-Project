import React, { useState } from "react";
import Child from "./ch";
function Parent() {
    const[inputValue, setInputValue] = useState('');
    const submit = (value) =>{
        setInputValue(value);
    }
    return(
        <>
        <Child onSumit={submit}/>
        
        <p>Input Value from Child {inputValue}</p>
        </>
    )
}

export default Parent;