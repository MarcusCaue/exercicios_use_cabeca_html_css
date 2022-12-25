function calcular() {
    var peso = document.getElementById("pesoAlmoco")
    peso = parseFloat(peso.value)
    var desconto = document.getElementById("desconto")
    desconto = parseInt(desconto.value)

    if (desconto < 0 || desconto > 100) {
        window.alert("Valor do desconto inválido. Insira um valor entre 0 e 100!")
    } else if (peso < 1) {
        window.alert("Valor do peso inválido. Insira um valor maior que 1!")
    } else {
        /* Multiplicando o valor do peso lido pelo preço do quilo */
        var valorPeso = (peso / 1000) * 44.5
        /* Aplicando o desconto sobre o valor obtido */
        var valorFinal = valorPeso - (valorPeso * (desconto / 100))

        /* Variável que vai permitir modificar o conteúdo da tag <section id="resultado"> */
        var sectionResultado = document.querySelector("section#resultado")

        sectionResultado.innerHTML = `<p>Valor total a pagar: R$${valorFinal.toFixed(2)}</p>`
    }
}