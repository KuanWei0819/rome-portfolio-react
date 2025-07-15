import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLink = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      handleNavClick(id);
    }
  };

  return (
    <nav id="topNav">
      <div className="nav-wrapper">
        <Link className="navbar-brand" to="/">Rome Lin</Link>
        <ul className="navbar-nav">
          {["about", "experience", "education", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`/#${section}`}
                className="nav-link"
                onClick={(e) => handleLink(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-link"
              href={`${process.env.PUBLIC_URL}/resume-kuanwei-lin.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
