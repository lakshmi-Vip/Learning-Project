import React, {useState} from 'react';

const ToggleState = () =>{
    const [isToggle, setToggle] = useState(true);

const handleClick = () =>{
    setToggle(prevToggle => !prevToggle);
}

    return (
        <div>
            <p>check toggle {isToggle ? 'on' : 'off'}</p>
            <button onClick={handleClick}>Toggle Click</button>
        </div>
    
    )
}

export default ToggleState;

