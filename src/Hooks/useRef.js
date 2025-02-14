//useRef(): hook is useful for accesing and interacting with DOM elements directly, storing mutable values that do not cause the rerender when it update.
//Creating a reference useRef return a mutable ref object whos .current property is initialized to the passed argument.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Refe() {
  //Accessing the DOM element.
  const inputRef = useRef();
  const iR = useRef();
  const focusInput = () =>{
    inputRef.current.focus();
  }
  useEffect(()=>{
   iR.current.focus();
  },[])
  //storing mutable value
  const [count, setCount] = useState(0)
  const renderCount = useRef(0);
  useEffect(()=>{
    renderCount.current = renderCount.current + 1
  },[renderCount.current])
  return (
    <>
    <h5>useRef Hook</h5>
    <input type='text' ref={iR}></input>
    <input ref={inputRef} type='text'></input>
    <button onClick={focusInput}>Click</button>
    {/* storing */}
    <p>Count: {count}</p>
    <p>Render:{renderCount.current}</p>
    <button onClick={()=>{setCount(count + 1)}} >+</button>
    </>
  )

}
 export default Refe