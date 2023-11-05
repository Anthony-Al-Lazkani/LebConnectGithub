import React from 'react';
import './App.css';
import Navbar from './components/navbar'; // Corrected here
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/pages/homepage'; // Corrected here
import Signup from './components/pages/signup';
import ContactUs from './components/pages/contactus'; // Corrected here
import AboutUs from './components/pages/aboutus'; // Corrected here
import Tourism from './components/pages/tourism'; // Corrected here

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} /> 
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Tourism' element={<Tourism />} />
      </Routes>
    </Router>
  );
}

export default App;