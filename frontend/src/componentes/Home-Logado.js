import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Paginas/Pictures/Pura aqcua ABA.png'; 
import Navbar from '../componentes/Navbar';
import Carousel from '../componentes/Carousel';
import Cardsection from '../componentes/Cardsection';
import Conteudo from '../componentes/Conteudo';
import Sobre from '../componentes/Sobre';
import Footer from '../componentes/Footer';
import '../componentes/style/style.css'; // Importação do arquivo de estilos CSS

function NavbarLogado({ isAuthenticated }) {
  return (
    <div>
      <Navbar />
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
            Pura Acqua Brasil
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/profile">Perfil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/">Logout</NavLink>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
      <Carousel />
      <div className="white-space"></div>
      <Cardsection />
      <Conteudo />
      <Sobre />
      <Footer />
    </div>
  );
}

export default NavbarLogado;