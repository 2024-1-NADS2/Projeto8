const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'tmj.mysql.database.azure.com',
  user: 'bruno',
  password: 'Fecap123',
  database: 'dbfecap'
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados MySQL estabelecida com sucesso!');
});

// Rota para registro de novo usuário
app.post('/register', (req, res) => {
  const { username, password , name} = req.body;
  const user = { username, password, name };
  console.log(username, password);
  
  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      console.log('Erro ao registrar novo usuário:', err);
      res.status(500).send('Erro ao registrar novo usuário.');
      return;
    }
    console.log('Novo usuário registrado com sucesso!');
    res.status(200).send('Usuário registrado com sucesso.');
  });
});

// Rota para autenticação de usuário
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.log('Erro ao autenticar usuário:', err);
      res.status(500).send('Erro ao autenticar usuário.');
      return;
    }

    if (result.length === 0) {
      console.log('Usuário não encontrado.');
      res.status(401).send('Usuário não encontrado.');
      return;
    }

    const user = result[0];

    if (user.password !== password) {
      console.log('Senha incorreta.');
      res.status(401).send('Senha incorreta.');
      return;
    }

    console.log('Usuário autenticado com sucesso!');
    res.status(200).send('Usuário autenticado com sucesso.');
  });
});

// Rota para redefinição de senha
app.post('/reset-password', (req, res) => {
  const { username, newPassword } = req.body;

  db.query('UPDATE users SET password = ? WHERE username = ?', [newPassword, username], (err, result) => {
    if (err) {
      console.log('Erro ao redefinir a senha:', err);
      res.status(500).send('Erro ao redefinir a senha.');
      return;
    }

    if (result.affectedRows === 0) {
      console.log('Usuário não encontrado.');
      res.status(404).send('Usuário não encontrado.');
      return;
    }

    console.log('Senha redefinida com sucesso!');
    res.status(200).send('Senha redefinida com sucesso.');
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
