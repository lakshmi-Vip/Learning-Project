import React from 'react';

const ListItem = React.memo(({ item, onItemClick }) => {
  console.log(`Rendering item: ${item.name}`);

  return (
    <li>
      {item.name}
      <button onClick={() => onItemClick(item.id)}>Click</button>
    </li>
  );
});

export default ListItem;