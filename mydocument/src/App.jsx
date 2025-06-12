
import React from 'react';
import Header from './Pages/Header';
import Hero from  './Pages/Hero';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Testimonials from './Pages/Testimonial';
import Contact from './Pages/Contacts';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;