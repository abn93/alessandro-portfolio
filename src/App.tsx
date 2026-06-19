import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import AboutSection from './components/aboutSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Header />
      <AboutSection />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;