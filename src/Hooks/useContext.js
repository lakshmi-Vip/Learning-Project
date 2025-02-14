//useContex(): is way to maintain state globally, is used to comsume value from react context.
//Context provide a way to pass data through the componet tree without passing props manually at each level.
import { React, createContext} from "react";
import Chaild from "./chaild";

export const UserContext = createContext();
export const ChannelContext = createContext();

function ContextHook() {

    return(
    <>
    <h5>useContext Hook</h5>
    <UserContext.Provider value={'Laki'}>
        <ChannelContext.Provider value={'Bengaluru'}>
         <Chaild />
        </ChannelContext.Provider>
    </UserContext.Provider>
    </>
    );
}

export default ContextHook;