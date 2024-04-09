 const express = require('express')

 const app = express()
 app.listen(8080, () =>{
  console.log('server on 8080')
 })

// Função para verificar as credenciais e redirecionar o usuário
function login(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obtenha os valores dos campos de usuário e senha
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulação de autenticação
  if (username === 'admin' && password === 'admin') {
      // Redirecionar para a página desejada após o login
      window.location.replace("file:///D:/VS/Carômetro/Car-metro/Adicionar_aluno/Index.html");
  } else {
      alert('Credenciais inválidas. Tente novamente.'); // Mensagem de erro para credenciais inválidas
  }
}

// Adiciona um ouvinte de evento para o envio do formulário de login
document.getElementById('login-form').addEventListener('submit', login);