function valida_email(email) {
  if (email == "" || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
    return false
  } else {
    // Validando o domí­nio do email (os caracteres pós @)
    let dominio = email.substring(email.indexOf("@") + 1)
    let dominiosAceitos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "ifpb.edu.br", "academico.ifpb.edu.br"]

    return ((dominiosAceitos.includes(dominio)) ? true : false)
  }
}

function valida_senha(senha) {
  return ((senha == "") ? false : true)
}

function valida_nome(nome) {
  return ((nome.match(/^[A-Z a-z]+$/) == null) ? false : true)
}

function valida_idade(idade) {
  return ((idade < 12 || idade > 130) ? false : true)
}

function valida_cadastro() {
  // Obtendo os dados
  let email = document.querySelector("input#email").value.trim()
  let senha = document.querySelector("input#senha").value
  let nome = document.querySelector("input#nome").value.trim()
  let idade = document.querySelector("input#idade").value

  // Controladores do submit 
  let senha_vld, email_vld, nome_vld, idade_vld

  // Validando o email
  email_vld = valida_email(email)
  feedback(email_vld, "Email")

  // Validando a senha
  senha_vld = valida_senha(senha)
  feedback(senha_vld, "Senha")

  // Validando o nome
  nome_vld = valida_nome(nome)
  feedback(nome_vld, "Nome")

  // Validando a idade
  idade_vld = valida_idade(idade)
  feedback(idade_vld, "Idade")

  return ((email_vld && nome_vld && senha_vld && idade_vld) ? true : false)
}

function valida_login() {
  // Obtendo os dados
  let email = document.querySelector("input#email_login").value.trim()
  let senha = document.querySelector("input#senha_login").value

  // Varíaveis que vão controlar se o form dará o submit ou não
  let senha_valida, email_valido

  // Validando o email
  email_valido = valida_email(email)
  feedback(email_valido, "Email")

  // Validando a senha
  senha_valida = valida_senha(senha)
  feedback(senha_valida, "Senha")

  return ((email_valido && senha_valida) ? true : false)
}

function feedback(tipo_feedback, campo) {
  // Selecionando o span que exibirá o feedback na página
  let fdb = document.querySelector(`span#feedback_${campo.toLowerCase()}`)
  // Resetando o conteúdo e as classes do feedback caso este já os possua com algum valor
  fdb.className = fdb.innerHTML = ""

  // Classes que serão adicionadas quando o campo for válido
  let classes_ok = "p-1 text-primary"
  // Imagem a ser exibida quando o campo for válido
  let img_ok = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'>"

  // Classes que serão adicionadas quando o campo for inválido
  let classes_error = "p-1 text-danger"
  // Imagem a ser exibida quando o campo for válido
  let img_error = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'>"
  
  // Campo válido
  if (tipo_feedback) { 
    fdb.className = classes_ok
    fdb.innerHTML = img_ok + ` ${campo} válido.`
  } 
  // Campo inválido
  else { 
    fdb.className = classes_error
    fdb.innerHTML = img_error + ` ${campo} inválido.`
  }

}

function limpa_form() {
  let feedbacks_campos = document.querySelectorAll("span")
  
  for (let i = 0; i < feedbacks_campos.length; i++) {
    feedbacks_campos[i].className = ""
    feedbacks_campos[i].innerHTML = ""
  }
}