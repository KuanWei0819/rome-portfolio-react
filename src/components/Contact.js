import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="resume-section contact-section" id="contact">
      <div className="resume-section-content text-center">
        <h2>Contact Me</h2>
        <p className="contact-subtext">Let's connect! I'm open to new opportunities and collaborations.</p>
        <ul className="contact-links">
          <li>
            <a href="mailto:romelin0819@gmail.com" className="contact-link">
              <FaEnvelope /> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kuan-wei-rome-lin/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/KuanWei0819" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
