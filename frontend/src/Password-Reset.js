import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './componentes/style/Login.css'; // Arquivo CSS
import logo from './Paginas/Pictures/Login-removebg-preview.png';
import background from './Paginas/Pictures/barco_peixes.jpg'; 

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aqui você faria a chamada para a API para redefinir a senha
      console.log('Redefinindo senha para:', email);
      console.log('Nova senha:', password);
      
      // Simulando um tempo de espera de 2 segundos
      setTimeout(() => {
        alert('Senha redefinida com sucesso!');
        navigate('/login'); // Redireciona para a página de login após a redefinição de senha
      }, 2000);
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      alert('Erro ao redefinir a senha. Tente novamente mais tarde.');
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
        <h2>Redefinir Senha</h2>
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
          <label htmlFor="senha">Nova Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Redefinir Senha</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
