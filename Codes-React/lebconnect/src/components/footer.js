import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // Import icons

function footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'><FaInstagram/>LebConnect</Link>
            <Link to='/'><FaFacebook/>LebConnect</Link>
            <Link to='/'><FaYoutube/>LebConnect</Link>
            <Link to='/'><FaTwitter/>LebConnect</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default footer;
