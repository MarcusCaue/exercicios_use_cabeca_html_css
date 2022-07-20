<?php
  function criar_conexao() {
    // Informações necessárias para se conectar ao Banco de Dados
    $host = "localhost";
    $porta = 3306;
    $user = "root";
    $senha = "";
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

  function exibir_dados($conexao_mysql) {
    # Pegando os dados do BD
    $sql_command = "SELECT * FROM usuario WHERE (nome = '" . $_POST["nome"] . "')";
    $resultado = mysqli_query($conexao_mysql, $sql_command);

    # Processando a linha retornada
    $dados = $resultado->fetch_array(MYSQLI_NUM);

    # Escondendo a senha
    $senha = $dados[4];
    $senha_escondida = "";
    for ($i = 0; $i < strlen($senha); $i++) {
      $senha_escondida .= "*";
    }
    $dados[4] = $senha_escondida;

    # Exibindo os dados
    for ($i = 1; $i < sizeOf($dados); $i++) {
      echo "<td>$dados[$i]</td>";
    }
  }

?>
