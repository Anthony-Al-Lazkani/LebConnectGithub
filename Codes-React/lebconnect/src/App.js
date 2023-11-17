import React from 'react';
import './App.css';
import Navbar from './components/comp/navbar'; // Corrected here
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/pages/HomePage/homepage'; // Corrected here
import ContactUs from './components/pages/Contact Us/contactus'; // Corrected here
import AboutUs from './components/pages/About Us/aboutus'; // Corrected here
import Tourism from './components/pages/Tourism/tourism'; // Corrected here
import Signup from './components/pages/LoginSignup/signup';
import Login from './components/pages/LoginSignup/Login';
import Footer from './components/comp/footer';
import News from './components/pages/News/news';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/news" element={<News />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/Tourism' element={<Tourism />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;