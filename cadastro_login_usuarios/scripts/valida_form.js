function valida_login() {
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
    email_valido = valida_email()
    if (email_valido) {
        feedback_email.className += "p-1 text-primary"
        feedback_email.innerHTML = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'> Email válido."
    } else {
        feedback_email.className += "p-1 text-danger"
        feedback_email.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Informe um email válido."
    }

    // Validando a senha
    senha_valida = valida_senha()
    if (senha_valida) {
        feedback_senha.className += "p-1 text-primary"
        feedback_senha.innerHTML = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'> Senha válida."
    } else {
        feedback_senha.className += "p-1 text-danger"
        feedback_senha.innerHTML = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Insira a sua senha."
    }
    
    if (email_valido && senha_valida) {
        return true
    } else {
        return false
    }
}

function valida_email() {
    // Obtendo o dado
    let email = document.querySelector("input#email_login").value

    if (email == "" || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
        return false
    } else {
        // Validando o domí­nio do email (os caracteres pós @)
        let dominio = email.substring(email.indexOf("@") + 1)
        let dominiosAceitos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "ifpb.edu.br", "academico.ifpb.edu.br"]

        if (!(dominiosAceitos.includes(dominio))) {
            return false
        } else {
            return true
        }
    }
}

function valida_senha() {
    // Obtendo o dado
    let senha = document.querySelector("input#senha_login").value
    
    if (senha == "") {
        return false
    } else {
        return true
    }
}

function valida_nome() {
    // Obtendo o dado
    let nome = document.querySelector("input#nome").value

    if (nome.match(/^[A-Z a-z]+$/) == null) {
        return false
    } else {
        return true
    }
}

function valida_idade() {
    // Obtendo o dado 
    let idade = document.querySelector("input#idade").value

    if (idade < 12 || idade > 130) {
        return false
    } else {
        return true
    }
}

function valida_cadastro() {
    

}