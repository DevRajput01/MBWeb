import React from 'react';
import './Product.css';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

import GreenGifts from './shop-img/GreenGifts.png';
import HomeDecore from './shop-img/HomeDecore.png';
import s11 from './shop-img/Othimg/s11.png';
import h from './shop-img/Othimg/h.png';
//import MossFrames from './shop-img/MossFrames.png';
import PlantCare from './shop-img/PlantCare.png';
import PotsPalnts from './shop-img/PotsPlanters.png';

const Product = () => {
  return (
    <>
      <Typography variant='h5' className='product-title'>Buy Plants & Products in the same place....</Typography>
      <Box className='product-container'>
        <div className='product-box'>
          <Card className='card'>
            <CardMedia
              component="img"
              alt="Home Decor"
              height="140"
              image={HomeDecore}
              title="Home Decor"
            />
            <CardContent>
              <Typography variant="h5" className='ShopTitle' component="div">
                Home Decor
              </Typography>
              <Typography variant="body2" className='shopDes' color="text.secondary">
                Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
              </Typography>
              <Button variant='contained' color='secondary' onClick={() => window.location.href = './Shops/HomeDecor.jsx'}>
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='product-box'>
        <Card className='card'>
      <CardMedia
        component="img"
        alt="Bulbs And Seeds"
        height="140"
        image={s11}
        title="Bulbs And Seeds"
      />
      <CardContent>
        <Typography variant="h5" className='ShopTitle' component="div">
          Bulbs And Seeds
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
        </Typography>
        <Button 
          variant='contained' 
          color='secondary' 
          onClick={() => window.location.href = './Shops/BulbsSeeds.jsx'}
        >
          Go to Shop
        </Button>
      </CardContent>
    </Card>
        </div>

        <div className='product-box'>
          <Card className='card'>
            <CardMedia
              component="img"
              alt="Pots and Plants"
              height="140"
              image={GreenGifts}
              title="GreenGifts"
            />
            <CardContent>
              <Typography variant="h5" className='ShopTitle' component="div">
                Green Gifts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
              </Typography>
              <Button variant='contained' color='secondary' onClick={() => window.location.href = './Shops/GreenGifts.jsx'}>
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='product-box'>
          <Card className='card'>
            <CardMedia
              component="img"
              alt="Moss Frames"
              height="140"
              image={h}
              title="Moss Frames"
            />
            <CardContent>
              <Typography variant="h5" className='ShopTitle' component="div">
                Moss Frames
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
              </Typography>
              <Button variant='contained' color='secondary' onClick={() => window.location.href = './Shops/MossFrames.jsx'}>
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='product-box'>
          <Card className='card'>
            <CardMedia
              component="img"
              alt="Plants Care"
              height="140"
              image={PlantCare}
              title="Plants Care"
            />
            <CardContent>
              <Typography variant="h5" className='ShopTitle' component="div">
                Plants Care
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
              </Typography>
              <Button variant='contained' color='secondary' onClick={() => window.location.href = './Shops/PlantCare.jsx'}>
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='product-box'>
          <Card className='card'>
            <CardMedia
              component="img"
              alt="Pots and Plants"
              height="140"
              image={PotsPalnts}
              title="Pots and Plants"
            />
            <CardContent>
              <Typography variant="h5" className='ShopTitle' component="div">
                Pots and Plants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore our wide variety of plants and gardening products. From exotic species to everyday greenery, we have everything you need to create your dream garden.
              </Typography>
              <Button variant='contained' color='secondary' onClick={() => window.location.href = './Shops/PotsPlanters.jsx'}>
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
};

export default Product;
