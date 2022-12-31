<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro feito com sucesso</title>

  <!-- CSS Local -->
  <link rel="stylesheet" href="../../../styles/style.css">

  <!-- Importando o BootStrap --> 
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
		integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
		integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
		crossorigin="anonymous"></script>
</head>
<body>
  <main class="container col-10 col-md-7 mt-5 border border-dark border-1 rounded-3 p-4 container_page">

    <header class="">
      <h1 class="text-center pb-2 border-bottom border-dark border-1">Cadastro feito com sucesso</h1>
      <p class="mt-3 text-justify"> 
        Agradeçemos por ter feito o seu cadastro no nosso site. ^^) <br> 
        Todos os seus dados estão <strong class="text-primary"><u>seguros</u></strong> em nosso banco de dados. <br> 
        Confira abaixo os dados enviados pelo formulário preenchido por você.</p>
    </header>

    <section id="dados_form" class="p-2 border border-dark border-1 rounded">
      <h2 class="fs-3 pb-2 border-bottom border-dark border-1">Dados enviados pelo formulário</h2>

      <section style="overflow-x: auto;">
        
        <table class="table table-bordered text-center">
          <thead class="bg-dark text-white">
            <tr scope="row">
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Email</th>
              <th scope="col">Senha</th>
            </tr>
          </thead>

          <tbody>
            <tr scope="row">
              <?php exibir_dados($conexao) ?>
            </tr>
          </tbody>
        </table>

      </section>

    </section>
  </main>

</body>
</html>