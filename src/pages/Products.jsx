import { Container, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';
import ShoppingCard from '../components/ShoppingCard';

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

function Products() {
  const { data, isLoading, isError, error } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Container>
        <Typography variant="h6">This is the product page</Typography>
        {data &&
          data.map((product) => (
            <ShoppingCard key={product.id} product={product} />
          ))}
      </Container>
    </div>
  );
}

export default Products;
