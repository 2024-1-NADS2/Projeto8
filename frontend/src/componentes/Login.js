import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css'; // Arquivo CSS
import logo from './Paginas/Pictures/Login-removebg-preview.png';
import background from './Paginas/Pictures/duas-baleias.jpg'; // Importação da imagem de fundo
import { NavLink } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  document.title = 'Login - Pura Acqua';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        // Sucesso na autenticação
        const text = await response.text();
        console.log('Usuário autenticado com sucesso!', text);
        setIsAuthenticated(true); // Defina isAuthenticated como true
        navigate('/');
      } else {
        // Falha na autenticação
        const text = await response.text();
        console.error('Falha na autenticação:', text);
        alert('Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro ao conectar-se à API:', error);
      alert('Erro ao conectar-se ao servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      color: '#ffffff'
    }}>
        <a className="navbar-brand logo" href="#">
          <img id="logo" src={logo} alt="Logotipo do Pura Acqua" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>

      <div className="container2">

        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <NavLink className="nav-link" activeClassName="active" to="/Request-Password-Reset">Esqueceu sua senha?</NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
