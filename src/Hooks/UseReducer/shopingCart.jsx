import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case 'remove':
      return state.filter(item => item.id !== action.id);
    case 'updateQuantity':
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      throw new Error();
  }
}

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (id, name) => {
    dispatch({ type: 'add', id, name });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'remove', id });
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch({ type: 'updateQuantity', id, quantity });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => handleAdd(1, 'Apple')}>Add Apple</button>
      <button onClick={() => handleAdd(2, 'Banana')}>Add Banana</button>
      <ul>
        {state.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;