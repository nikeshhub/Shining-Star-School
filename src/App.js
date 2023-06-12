import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import HeroSection from './components/hero/hero';
import FacilitiesSection from './components/cards/cards';
import TestimonialsSection from './components/testimonials/testomonials';
import FooterPage from './components/footer/footer';
import { Homepage } from './pages/Homepage/homepage';
import About from './pages/About/About';

function App() {
  return (
    <div>
    <Navbar />
    <About/>
    <FooterPage/>
  </div>
  );
}

export default App;
