import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link" onClick={closeMenu}>
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1WC6rtPl6YPW914zQlx76D286dlVl6yGR/view?usp=drive_link"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
