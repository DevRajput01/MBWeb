import React from 'react';
import slider1 from '../img/slider1.jpg';
import '../Components/Home.css';
import { Button, Grid, Typography } from '@mui/material';
import sw from './shop-img/Othimg/sw.png';
import aa from './shop-img/Othimg/aa.png';
import b from './shop-img/Othimg/b.png';
import c from './shop-img/Othimg/c.png';
import d from './shop-img/Othimg/d.png';
import e from './shop-img/Othimg/e.png';
import f from './shop-img/Othimg/f.png';

const Home = () => {
  return (
    <>
    <div className='home-container'>
        <div className='home-background'>
        <div className='overlay-content'>
          <h1>Let's make the Environment Green</h1>
          <p>100+ Garden products | 500+ Plants Species</p>
          <Button variant='contained' color='success' onClick={() => window.location.href = './Product.jsx'}>Our Products</Button>
           </div>
            <img src={slider1} alt="slider1" >
            </img>
        </div>
        </div>
        <Typography variant='h6' className='BestSeller'> Our Best Seller 🌱🪴 </Typography>
        <Grid container  className='circle-image'>
          <img src={f} alt="GreenGifts" ></img>
          <img src={d} alt="GreenGifts" ></img>
          <img src={c} alt="GreenGifts" ></img>
          <img src={e} alt="GreenGifts" ></img>
          <img src={sw} alt="GreenGifts" ></img>
          <img src={aa} alt="GreenGifts" ></img>
          <img src={b} alt="GreenGifts" ></img>
        </Grid>
        </>

  );
};

export default Home;
