import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from '../pages/HomePage/homepage'; // Corrected here
import ContactUs from '../pages/Contact Us/contactus'; // Corrected here
import AboutUs from '../pages/About Us/aboutus'; // Corrected here
import Tourism from '../pages/Tourism/tourism'; // Corrected here
import Signup from '../pages/LoginSignup/signup';
import Login from '../pages/LoginSignup/Login';
import News from '../pages/News/news';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/news" element={<News />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/Tourism' element={<Tourism />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;
