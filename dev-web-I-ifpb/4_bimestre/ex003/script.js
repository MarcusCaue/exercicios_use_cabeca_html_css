function mostraMensagem() {
    let title = document.querySelector("h2#mensagemOferta");
    title.innerHTML = "Aqui você encontrará as melhores ofertas!"
    title.style.filter = "drop-shadow(0px 0px 9px)";
}

function fechaMensagem() {
    let title = document.querySelector("h2#mensagemOferta");
    title.innerHTML = "";
}

function acessar(link) {
    window.open(link);
}

function validaForm() {
    let dadoTelefone = document.querySelector("input#tel").value;

    if (dadoTelefone == '') {
        window.alert("Digite um dado! O campo não pode ficar vazio.")
        return false;
    } 
    else {
        let mensagem = document.querySelector("textarea#mensagemEmail")
        let telefone = document.querySelector("input#tel").value;

        mensagem.innerHTML = `Telefone informado no nosso site: ${telefone}`
        
        window.alert("Telefone enviado com sucesso! Confira o seu email! :)")
        return true;
    }
}