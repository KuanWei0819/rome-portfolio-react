import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="topNav">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#hero">
          <img
            src="profile.jpg"
            alt="Profile"
            className="img-profile me-2"
          />
          <span style={{ fontWeight: 'bold' }}>Rome Lin</span>
        </a>


        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#project">Projects</a></li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/resume-kuanwei-lin.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>  {/* ← Add this */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
