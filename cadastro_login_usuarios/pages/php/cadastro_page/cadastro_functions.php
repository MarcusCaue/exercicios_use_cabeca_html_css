<?php
  function criar_conexao() {
    // Informações necessárias para se conectar ao Banco de Dados
    $host = "localhost";
    $porta = 3306;
    $user = "root";
    $senha = "BoB?y4x999";
    $bd = "cadastro_login_usuarios";

    // Fazendo a conexão
    return $conexao = new mysqli($host, $user, $senha, $bd, $porta);
  }

  function fechar_conexao($conexao_mysql) {
    mysqli_close($conexao_mysql);
  }

  function cadastrar($conexao_mysql) {
    # Campos 
    $nome = $_POST["nome"];
    $idade = $_POST["idade"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    # Enviando-os ao BD
    $sql_command = "INSERT INTO usuario (nome, idade, email, senha) VALUES ('$nome', '$idade', '$email', '$senha');";
    $resultado = mysqli_query($conexao_mysql, $sql_command);
  }

?>