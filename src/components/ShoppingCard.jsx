import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const ShoppingCard = ({ product }) => {
  const { image, description, price, rating } = product;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <img src={image} alt="Product" style={{ width: '100px', height: '100px' }} />
          </Grid>
          <Grid item>
            <Typography variant="h6">Product Name</Typography>
            <Typography variant="body2" color="textSecondary">
              {description.toString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Price: {price.toString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rating: {rating.toString()}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="Add to cart">
              <ShoppingCart />
            </IconButton>
            <IconButton color="secondary" aria-label="Add to favorites">
              <Favorite />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ShoppingCard;
