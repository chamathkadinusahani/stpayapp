import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HomePage';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
