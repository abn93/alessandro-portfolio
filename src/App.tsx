import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;