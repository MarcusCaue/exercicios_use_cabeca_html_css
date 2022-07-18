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

  // Selecionando os elementos de feedback
  fb_email = document.querySelector("span#feedback_email")
  fb_senha = document.querySelector("span#feedback_senha")
  fb_nome = document.querySelector("span#feedback_nome")
  fb_idade = document.querySelector("span#feedback_idade")

  fb_email.className = fb_email.innerHTML = fb_senha.className = fb_senha.innerHTML = fb_nome.className = fb_nome.innerHTML = fb_idade.className = fb_idade.innerHTML = ""

  // Validando o email
  email_vld = valida_email(email)
  if (email_vld) {
    fb_email.className = "p-1 text-primary"
    fb_email.innerHTML = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'> Email válido."
  } else {
    fb_email.className = "p-1 text-danger"
    fb_email.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Informe um email válido."
  }

  if (email_vld && nome_vld && senha_vld && idade_vld) {
    return true
  }
  return false
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
