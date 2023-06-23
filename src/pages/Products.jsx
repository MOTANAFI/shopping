import { Container, Typography } from '@mui/material'
import React from 'react'
import ShoppingCard from '../components/ShoppingCard'


function Products() {
  return (
    <div>
      <Container>
      <Typography variant='h6'>This is the product page</Typography>
      <ShoppingCard />
      </Container>
      </div>
  )
}

export default Products