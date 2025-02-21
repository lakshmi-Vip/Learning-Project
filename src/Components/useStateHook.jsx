/*useState is a Hook that allows you to have state variables in functional components. 
You pass the initial state to this function and it returns a variable with the current state value
 (not necessarily the initial state) and another function to update this value.*/

import React, { useState } from 'react';
// import ToggleState from './Usestate/toggleState';
// import FormState from './Usestate/formState';

function UseStateHook() {
    //example take as todo app
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo('');
    }

    const delteTodo = (index) => {  
        let newTodos = todos.filter((item, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

             <button onClick={() => setTodos([])}>Delete All</button> {/*delete selected  not all todos*/}
             <button onClick={() => delteTodo(0)}>Delete 1st</button> {/*delete selected  not all todos*/}
            <button onClick={() => delteTodo()}>Delete</button>

            {/* <div>
                <ToggleState />
                <br />
                <FormState />
            </div> */}
        </div>
    )
}

export default UseStateHook;


