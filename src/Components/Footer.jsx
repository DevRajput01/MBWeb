import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We offer the best plants and gardening tools to make your home greener and more beautiful.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@mybaag.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, Anytown, CA 12345</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./Product.jsx">Shop</a></li>
            <li><a href="./Aboutus.jsx">About</a></li>
            <li><a href="./Contact.jsx">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FacebookIcon /> </a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <InstagramIcon /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <TwitterIcon /> </a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyBaag. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
