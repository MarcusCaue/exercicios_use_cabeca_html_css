<?php
  // Informações necessárias para se conectar ao Banco de Dados
  $host = "localhost";
  $porta = 3306;
  $user = "root";
  $senha = "BoB?y4x999";
  $bd = "cadastro_login_usuarios";

  // Fazendo a conexão
  $conexao = new mysqli($host, $user, $senha, $bd, $porta);
?> 