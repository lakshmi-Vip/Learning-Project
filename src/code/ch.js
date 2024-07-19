import React, { useState } from 'react';

function Child({onSubmit}) {
 const[inputValue, setInputValue] = useState('');

 const change = (e) =>{
    setInputValue(e.targate.value);
 }
 const Submit = () =>{
     onSubmit(inputValue);
 }
    return (
        <div>
        <h1>HIIIIIIIIIIIIIII</h1>
        <input type='text' value={inputValue} onChange={change}></input>
        <button onClick={Submit}>Submit</button>
        <p>Hi {inputValue}</p>
        </div>
    );
}

export default Child;