import React, { useState, useMemo } from 'react';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const products = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Watermelon',
    'Peach',
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a product..."
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;