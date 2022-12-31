export const calculadora = {
  "somar": (a, b) => { return a + b },
  "subtrair": (a, b) => { return a - b },
  "dividir": (a, b) => { return a / b },
  "multiplicar": (a, b) => { return a * b }
}

export function validaEntrada(entrada) {
  let caracteresAceitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  // Removendo os espaços em branco
  entrada = entrada.trim()
  
  // Verificando se a entrada contém os caracteres aceitos
  let caracteresEntrada = entrada.split("")
  for (let charEntrada of caracteresEntrada) {
    if (! caracteresAceitos.includes(charEntrada)) {
      return false
    }
  }  
  
  return true 
}

const entrada = document.querySelector("input")
const calculo = [] // Responsável por guardar os números que serão calculados e a operação que será feita entre eles

const buttonsDigit = document.querySelectorAll(".digit")
const buttonsOperacao = document.querySelectorAll(".operacao")
const buttonClear = document.querySelector("#clear")
const buttonDelete = document.querySelector("#delete")
const buttonIgual = document.querySelector("#igual")

// Insere um dígito na entrada da calculadora
buttonsDigit.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let valueButton = e.currentTarget.innerText

    if (valueButton == "," && entrada.value.includes(",")) {
      alert("A vírgula só pode ser adicionada uma vez.")
    } else {
      entrada.value += valueButton
    }
  })
})
// Limpa a entrada e os valores armazenados em "calculo"
buttonClear.addEventListener("click", (e) => {
  entrada.value = ""
  calculo.splice(0, calculo.length)
})
// Remove um dígito da entrada
buttonDelete.addEventListener("click", (e) => {
  let valorEntrada = entrada.value
  let lastDigitEntrada = valorEntrada[valorEntrada.length - 1]
  entrada.value = valorEntrada.replaceRight(lastDigitEntrada, "")
})
/* // Realiza a operação entre dois números
buttonsOperacao.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Operacão Escolhida
    let operacaoEscolhida = e.currentTarget.id
    // Verifica se já tem um valor na entrada para realizar o cálculo
    let valorEntrada = entrada.value

    if (valorEntrada == "") {
      alert("Digite um valor na entrada")
    } else 
    {
      if (calculo.length < 2) {
        calculo.push(parseFloat(valorEntrada))
        alert("Valor adicionado!")
        entrada.value = ""
      } else {
        calculo[0] = calculo.reduce((a, b) => { return calculadora[operacaoEscolhida](a, b) })
        calculo.pop()
      }

      console.log(calculo)
    }
  })
}) */

// Exibe o resultado de uma operação
buttonIgual.addEventListener("click", (e) => {
  if (calculo.length == 1) { 
    entrada.value = calculo[0]
  } else if (calculo.length == 2) {
    let n1 = calculo[0]
    let n2 = calculo[2]
    let operacao = calculo[1]
    entrada.value = calculadora[operacao](n1, n2)
  }
})






// Talvez eu implemente depois...
/* function temCaracteresAceitos(entrada) {
  // Caracteres Aceitos na Entrada
  let caracteresAceitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"]

  // Removendo os espaços em branco
  entrada = entrada.trim()

  // Se tiver operações entre os números, remove o espaço em branco entre eles, caso tenha
  if (entrada.includes("+") || entrada.includes("-") || entrada.includes("/") || entrada.includes("*")) {
    entrada = entrada.replaceAll(" ", "")
  } else {
    return false
  }

  // Impedindo que o usuário entre com uma conta que termine ou comece com algum caracter de operação
  if (entrada.startsWith("+") || entrada.endsWith("+") || entrada.startsWith("-") || entrada.endsWith("-") || entrada.startsWith("/") || entrada.endsWith("/") || entrada.startsWith("*") || entrada.endsWith("*")) {
    return false
  }

  // Verificando se a entrada contém os caracteres aceitos
  let caracteresEntrada = entrada.split("")
  for (let charEntrada of caracteresEntrada) {
    if (! caracteresAceitos.includes(charEntrada)) {
      return false
    }
  }

  return true

} */

// Talvez eu implemente depois...
/* function completeZero(entrada="") {
  if (entrada.startsWith("+") || entrada.startsWith("-")) {
    entrada = "0" + entrada
  }
  if (entrada.endsWith("+") || entrada.endsWith("-")) {
    entrada = entrada + "0"
  }
  if (entrada.startsWith("*") || entrada.startsWith("/")) {
    entrada = "0" + entrada
  }
  if (entrada.endsWith("+") || entrada.endsWith("-")) {
    entrada = entrada + "0"
  }
} */
