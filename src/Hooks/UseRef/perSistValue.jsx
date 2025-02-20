import React, { useState, useRef } from 'react';

const PersistValue = () => {
  const [renderCount, setRenderCount] = useState(0);
  const clickCountRef = useRef(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    setRenderCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Persist Value Example</h1>
      <p>Button clicked: {clickCountRef.current} times</p>
      <p>Component re-rendered: {renderCount} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default PersistValue;