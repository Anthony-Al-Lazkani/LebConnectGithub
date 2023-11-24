import React from 'react';
import './App.css';
import Navbar from './components/comp/navbar'; // Corrected here
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/comp/footer';

import AnimatedRoutes from './components/comp/AnimatedRoutes'




function App() {

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
