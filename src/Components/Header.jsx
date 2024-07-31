
import React from 'react';
import './HeaderStyle.css';
import logoH from '../img/logoH.png';
import { Grid, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Header = () => {
  return (
    <div className='nav'>
      <Grid container alignItems="center" className="navbar-content">
        <Grid item xs={6} sm={4} className="navbar-logo">
          <img src={logoH} alt='MyBaag' onClick={() => window.location.href = './Home.jsx'} />
        </Grid>
        <Grid item xs={12} sm={4} className="navbar-links">
          <ul>
            <li><a href="./Home.jsx">Home</a></li>
            <li><a href="./Product.jsx">Products</a></li>
            <li><a href="./Contact.jsx">Contact</a></li>
            <li><a href="./Shops.jsx"> Shops </a></li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={4} className='nav-icon'>
          <IconButton>
            <ShoppingCartIcon className='cart-icon' fontSize='large' />
          </IconButton>
          <IconButton>
            <AccountCircleRoundedIcon className='account-icon' fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

