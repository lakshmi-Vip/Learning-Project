import { React, useState, useContext } from "react";
import {UserContext, ChannelContext} from "./useContextHook"

function ChildContextHook() {
 

 
 const name = useContext(UserContext);
 const place = useContext(ChannelContext);
    return(
        <>
        <form>
            <p>My name is {name} and rented home in {place}</p>
            
            <button>Submit</button>
        </form>
        </>
    );
}

export default ChildContextHook