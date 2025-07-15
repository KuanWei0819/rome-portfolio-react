import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="resume-section" id="hero">
      <div className="resume-section-content">
        <h1>
          <Typewriter
            options={{
              strings: ['Hi, my name is Rome.', 'I build data pipelines.', 'I analyze, automate, and scale.'],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
              cursor: '', // disables the blinking cursor
            }}
          />
        </h1>
        <p className="lead">Welcome to my portfolio!</p>
      </div>
    </section>
  );
};

export default Hero;
