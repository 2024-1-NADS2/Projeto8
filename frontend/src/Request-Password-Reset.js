import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './componentes/style/Login.css'; // Arquivo CSS
import logo from './Paginas/Pictures/Login-removebg-preview.png';
import background from './Paginas/Pictures/duas-baleias.jpg'; 

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aqui você faria a chamada para a API para solicitar a redefinição de senha
      console.log('Solicitando redefinição de senha para:', email);
      
      // Simulando um tempo de espera de 2 segundos
      setTimeout(() => {
        alert('Solicitação de redefinição de senha enviada com sucesso!');
        navigate('/login'); // Redireciona para a página de login após a solicitação de redefinição de senha
      }, 2000);
    } catch (error) {
      console.error('Erro ao solicitar a redefinição de senha:', error);
      alert('Erro ao solicitar a redefinição de senha. Tente novamente mais tarde.');
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
        <h2>Solicitar Redefinição de Senha</h2>
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
          <button type="submit">Solicitar Redefinição de Senha</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordResetRequest;
