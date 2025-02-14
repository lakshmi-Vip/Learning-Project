//The useMemo hook in React is used to memoize the result of a computation, so that the computation is only re-run when one of its dependencies changes. This can improve performance by avoiding expensive calculations on every render.

//The useMemo hook takes two arguments: a function that performs the computation, and an array of dependencies. The function is only re-run when one of the dependencies changes. The result of the computation is memoized, so that it is only re-calculated when necessary.
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos Usememo</h2>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHook
