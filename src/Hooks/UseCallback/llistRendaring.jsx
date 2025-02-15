import React, { useState, useCallback } from 'react';
import ListItem from './listItem';

const ListRendering = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleItemClick = useCallback((id) => {
    console.log(`Item clicked: ${id}`);
  }, []);

  return (
    <div>
      <h1>List Rendering with useCallback</h1>
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} onItemClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;