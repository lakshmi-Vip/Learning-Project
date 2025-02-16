import React, { useRef } from 'react';

const AccessDomElement = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <h1>Access DOM Element Example</h1>
      <div ref={divRef} style={{ width: '200px', height: '200px', backgroundColor: 'lightgray' }}>
        Click the button to change my color
      </div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default AccessDomElement;