import React from 'react';

const ShoppingCard = ({product}) => {
  return (
   <div key={product.id}>
    <h1>{product.title}</h1>
    </div>
  );
};

export default ShoppingCard;
