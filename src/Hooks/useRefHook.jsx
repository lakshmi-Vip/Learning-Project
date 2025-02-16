/*
what is useRef?
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component.
A common use case is to access a child imperatively.
it will not cause the component to re-render when the ref is updated.
can access dom nodes/elements directly.
*/

import React, { useRef } from 'react';
import AccessDomElement from './UseRef/domElement';
import PersistValue from './UseRef/perSistValue';
const UseRefHook = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>UseRef Hook</h1>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus Input</button>

            <AccessDomElement />
            <PersistValue />
        </div>
    )
}

export default UseRefHook;