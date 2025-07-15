import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <Router>
      <Navbar />

      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}>
        <button
          className="custom-btn"
          onClick={() => setDarkMode(prev => !prev)}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
