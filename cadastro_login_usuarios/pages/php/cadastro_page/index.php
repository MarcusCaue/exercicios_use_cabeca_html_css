<!-- Importando o arquivo que realiza a conexão com o banco de dados -->
<?php include_once("../config_bd.php"); ?>

<!-- Enviando os dados do formulário para o banco de dados -->
<?php include_once("cadastro.php") ?>

<!-- Página PHP a ser exibida quando o cadastro for concluído -->
<?php include_once("page.php") ?>

<!-- Encerrando a conexão com o BD -->
<?php mysqli_close($conexao); ?>