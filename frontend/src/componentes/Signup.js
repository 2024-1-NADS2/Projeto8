import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css'; // Podemos reutilizar o CSS existente
import logo from './Paginas/Pictures/Login-removebg-preview.png';
import background from './Paginas/Pictures/cadastro_imagem.jpg'; // Importação da imagem de fundo

function Cadastro() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  document.title = 'Cadastro - Pura Acqua';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const text = await response.text();
        console.log('Cadastro realizado com sucesso!', text);
        alert('Cadastro realizado com sucesso!');
        navigate('/'); // Redireciona para a página inicial ou de login
      } else {
        const text = await response.text();
        console.error('Erro ao cadastrar:', text);
        alert('Erro ao cadastrar. Tente novamente.');
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
      <div className="container2">
        <a className="navbar-brand logo" href="#">
          <img id="logo" src={logo} alt="Logotipo do Pura Acqua" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="username">E-mail:</label>
          <input
            type="email"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
