import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Signup from './componentes/Signup';
import './componentes/style/style.css'; // Importação do arquivo de estilos CSS
import PasswordResetRequest from './Request-Password-Reset';
import PasswordReset from './Password-Reset';
import NavbarLogado from './componentes/Home-Logado';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <NavbarLogado /> : <Home />}
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/request-password-reset"
          element={<PasswordResetRequest />}
        />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
