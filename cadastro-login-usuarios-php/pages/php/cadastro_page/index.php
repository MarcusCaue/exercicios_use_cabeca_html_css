<!-- Importando o arquivo que contém as funções PHP que serão utilizadas -->
<?php include_once("cadastro_functions.php"); ?>

<!-- Realizando a conexão com o banco de dados -->
<?php $conexao = criar_conexao(); ?>

<!-- Enviando os dados do formulário para o banco de dados -->
<?php cadastrar($conexao); ?>

<!-- Página PHP a ser exibida quando o cadastro for concluído -->
<?php include_once("page.php") ?>

<!-- Encerrando a conexão com o BD -->
<?php fechar_conexao($conexao) ?>