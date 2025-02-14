import { React, useState, useContext } from "react";
import {UserContext, ChannelContext} from "./useContext"

function childContextHook() {
 const [inputValue, SetInputValue] = useState();

 const Submit = (event) =>{
    SetInputValue(event.target.value)
 }
 const name = useContext(UserContext);
 const place = useContext(ChannelContext);
    return(
        <>
        <form>
            <p>My name is {name} and rented home in {place}</p>
            <input type='text' value = {inputValue}></input>
            <button onClick={Submit}>Submit</button>
        </form>
        </>
    );
}

export default childContextHook