import React from 'react';
import './App.css';
import Navbar from './components/navbar'; // Corrected here
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/pages/homepage'; // Corrected here
import ContactUs from './components/pages/contactus'; // Corrected here
import AboutUs from './components/pages/aboutus'; // Corrected here
import Tourism from './components/pages/tourism'; // Corrected here
import LoginSignup from './components/pages/LoginSignup/LoginSignup';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/LoginSignup" element={<LoginSignup />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Tourism' element={<Tourism />} />
      </Routes>
    </Router>
  );
}

export default App;