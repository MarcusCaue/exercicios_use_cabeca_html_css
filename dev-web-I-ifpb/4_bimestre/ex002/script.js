function gerarMensagem() {
    let dadosFormulario = {
        "nome": document.querySelector("input#nome").value,
        "endereco": document.querySelector("input#endereco").value,
        "telefone": document.querySelector("input#telefone").value,
        "idade": document.querySelector("input#idade").value
    }

    let mensagem = document.querySelector("textarea#mensagemEmail")

    mensagem.innerHTML = `
    Dados Cadastrados no Formulário
    
    Nome: ${dadosFormulario["nome"]}
    Idade: ${dadosFormulario["idade"]}
    Número de Telefone: ${dadosFormulario["telefone"]}
    Endereço: ${dadosFormulario["endereco"]}
    `
}
