import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your go-to place for all things green and beautiful</p>
      </div>
      <Grid container spacing={4} className="about-content">
        <Grid item xs={12} md={4}>
          <Box className="about-section" display="flex" alignItems="center">
          <NaturePeopleIcon className="about-icon" />
            <Box ml={2}>
              <Typography variant="h5" component="h2">
                Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary">
                At MyBaag, our mission is to bring the beauty and benefits of plants into every home. We believe in the power of nature to enhance our lives, and we strive to make it easy for everyone to create their own green oasis.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="about-section" display="flex" alignItems="center">
          <PeopleIcon className="about-icon" />
            <Box ml={2}>
              <Typography variant="h5" component="h2">
                Who We Are
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are a team of plant enthusiasts, gardeners, and horticulturists who are passionate about sharing our love for plants with the world. From rare exotic species to everyday greenery, we curate a diverse selection of plants and gardening products to suit every need and preference.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="about-section" display="flex" alignItems="center">
          <CheckCircleIcon className="about-icon" />
            <Box ml={2}>
              <Typography variant="h5" component="h2">
                Why Choose Us?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer a wide variety of high-quality plants and gardening products, sourced from trusted growers and suppliers. Our commitment to customer satisfaction means you can shop with confidence, knowing that you are getting the best products and support.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
