import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Socials />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
