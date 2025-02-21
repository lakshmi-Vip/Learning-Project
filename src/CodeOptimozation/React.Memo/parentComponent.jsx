import React, { useState } from 'react';
import ChaildComponent from './chaildComponent'

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [name1, setText] = useState('');

    return (
        <>
        <h1> Parent Component</h1>
        <button onClick={() => setCount(count + 1) }>Increment</button>
        <input
        type='text'
        value={name1}
        onChange={e => setText(e.target.value)}
        placeholder='Enter some text'
        />
        <p>{count}</p>

        <ChaildComponent name1={name1} />
        </>
    )
}

export default ParentComponent;