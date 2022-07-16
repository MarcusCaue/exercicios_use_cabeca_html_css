function valida_form() {
    // Obtendo os dados
    let email = document.querySelector("input#email_login").value
    let senha = document.querySelector("input#senha_login").value

    // Varíaveis que vão controlar se o form dará o submit ou não
    let senha_valida = false
    let email_valido = false

    // Selecionando os elementos que irão exibir o feedback
    let feedback_email = document.querySelector("span#feedback_email")
    let feedback_senha = document.querySelector("span#feedback_password")

    feedback_email.className = ""
    feedback_email.innerHTML = ""
    feedback_senha.className = ""
    feedback_senha.innerHTML = ""

    // Validando o email
    if (email == "" || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
        feedback_email.className += "p-1 text-danger"
        feedback_email.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Informe um email válido."
        email_valido = false
    } else {
        // Validando o domí­nio do email (os caracteres pós @)
        let dominio = email.substring(email.indexOf("@") + 1)
        let dominiosAceitos = ["gmail.com", "hotmail.com", "outlook.com", "ifpb.edu.br", "academico.ifpb.edu.br"]

        if (!(dominiosAceitos.includes(dominio))) {
            feedback_email.className += "p-1 text-danger"
            feedback_email.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Digite um domínio de email válido."
            email_valido = false
        } else {
            feedback_email.className += "p-1 text-primary"
            feedback_email.innerHTML = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'> Email válido."
            email_valido = true
        }
    }

    // Validando a senha
    if (senha == "") {
        feedback_senha.className += "p-1 text-danger"
        feedback_senha.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Insira a sua senha."
        senha_valida = false
    } else {
        feedback_senha.className += "p-1 text-primary"
        feedback_senha.innerHTML = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'> Senha válida."
        senha_valida = true
    }

    if (email_valido && senha_valida) {
        return true
    } else {
        return false
    }
}