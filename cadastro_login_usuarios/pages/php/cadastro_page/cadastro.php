<?php 
  # Campos 
  $nome = $_POST["nome"];
  $idade = $_POST["idade"];
  $email = $_POST["email"];
  $senha = $_POST["senha"];

  # Enviando-os ao BD
  $sql_command = "INSERT INTO usuario (nome, idade, email, senha) VALUES ('$nome', '$idade', '$email', '$senha');";
  $resultado = mysqli_query($conexao, $sql_command);
?>