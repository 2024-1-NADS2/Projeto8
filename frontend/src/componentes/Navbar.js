import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Paginas/Pictures/PURA_ACQUA-removebg-preview.png';
import './style/Navbar.css';

function Navbar({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Lógica para fazer logout
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-3">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sobre"
                onClick={(e) => scrollToSection(e, 'sobre')}
              >
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contato"
                onClick={(e) => scrollToSection(e, 'contato')}
              >
                Contato
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/profile">Perfil</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/signup">Cadastre-se</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
