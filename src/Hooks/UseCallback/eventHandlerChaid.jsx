import React, { useState, useCallback } from 'react';

const EventHandlerCombined = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = useCallback(() => {
    setDisplayValue(inputValue);
  }, [inputValue]);

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <ChildComponent onButtonClick={handleButtonClick} />
      <p>Displayed Value: {displayValue}</p>
    </div>
  );
};

const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('ChildComponent rendered');

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Update Parent</button>
    </div>
  );
});

export default EventHandlerCombined; 
//  In the above code, we have a parent component  EventHandlerCombined  and a child component  ChildComponent . The parent component has an input field and a button. The input field is used to set the value of the  inputValue  state. The button is used to update the  displayValue  state with the value of  inputValue . 
//  The  handleButtonClick  function is wrapped inside the  useCallback  hook. The  handleButtonClick  function is passed as a prop to the  ChildComponent  component. The  ChildComponent  component is wrapped inside the  React.memo  function to prevent unnecessary re-renders. 
//  When the button is clicked, the  handleButtonClick  function is called and the  displayValue  state is updated with the value of  inputValue . 
//  The  useCallback  hook is used to prevent the re-creation of the  handleButtonClick  function on every re-render. The  handleButtonClick  function is only re-created when the  inputValue  state changes. 
//  Conclusion 
//  In this article, we have learned about the  useCallback  hook in React. We have seen how to use the  useCallback  hook to memoize functions and prevent unnecessary re-renders. We have also seen how to use the  useCallback  hook with the  React.memo  function to prevent re-renders of child components. 
//  The  useCallback  hook is useful when you want to prevent the re-creation of functions on every re-render. It is especially useful when passing functions as props to child components. 
//  I hope this article was helpful to you. Please let me know your thoughts in the comments below. 
//  Happy coding! 
//  Peer Review Contributions by:  Lalithnarayan C