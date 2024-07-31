


import React from 'react';
import Lottie from 'react-lottie';
import animationData from './bird.json';
import { Grid, TextField, Button, Typography } from '@mui/material';
import './contact.css';

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="contact-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className='form-con'>
          <Typography variant="h4" className="contact-header">
            Contact Us
          </Typography>
          <Typography variant="body2" className="contact-subheader">
            We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to share your love for plants, we're here to help.
          </Typography>
          <form className="contact-form" noValidate autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              id="message"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary" className='button'>
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6} className="lottie-container">
          <Lottie options={defaultOptions} height={400} width={400} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
