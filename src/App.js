import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css';
import Contact from './components/Contact';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <>
      <Navbar />

      {/* Dark mode toggle button */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}>
        <button
          className="btn btn-outline-light"
          onClick={() => setDarkMode(prev => !prev)}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact /> 
    </>
  );
}

export default App;
