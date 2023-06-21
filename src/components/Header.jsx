import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/"><IconButton edge="start" color="inherit" aria-label="logo">
          <Typography variant='h6'>SHOPINGO</Typography>
        </IconButton>
        </Link>
        <div>
          <Link to="/cart"><IconButton color="inherit" aria-label="shopping cart">
            <ShoppingCartCheckoutOutlinedIcon />
          </IconButton>
          </Link>
          <Link to="/favorite"><IconButton color="inherit" aria-label="favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          </Link>
        </div>
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
