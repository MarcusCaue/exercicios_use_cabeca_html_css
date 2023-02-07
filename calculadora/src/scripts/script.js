const allButtons = document.querySelectorAll("button")
const input = document.querySelector("input")
const feedback = document.querySelector("#feedback")

const operatorsSymbols = {
  '<i class="fa-sharp fa-solid fa-plus"></i>': "+",
  '<i class="fa-sharp fa-solid fa-minus"></i>': "-",
  '<i class="fa-solid fa-xmark"></i>': "*",
  '<i class="fa-solid fa-divide"></i>': "/"
}

const calculadora = {
  "+": (a, b) => { return a + b },
  "-": (a, b) => { return a - b },
  "/": (a, b) => { return a / b },
  "*": (a, b) => { return a * b }
}

const calculo = []

// Adicionando o evento de clique para todos os botões
allButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let classesBtn = btn.classList
    let idBtn = btn.id

    // Dígitos -> São adicionados no input
    if (classesBtn.contains("digit")) {
      let inputValue = input.value
      let btnText = btn.textContent  
      
      // Apenas uma vírgula pode ser adicionada
      if (btnText === "," && inputValue.includes(",")) {
        window.alert("Tu só podes adicionar apenas uma vírgula.")
        return undefined
      }
      input.value += btnText
    }

    // Botões que limpam o valor do input e do feedback
    else if (idBtn.endsWith("clear")) {
      input.value = ""

      if (idBtn.startsWith("all")) {
        feedback.innerHTML = ""
      }
    }

    // Remove um dígito do valor do input
    else if (idBtn === "delete") {
      let inputValue = input.value
      inputValue = inputValue.slice(0, inputValue.length - 1)
      input.value = inputValue
    }

    // Operações matemática
    else if (classesBtn.contains("operacao")) {
      let operator = btn.innerHTML
      let number = input.value
      let symbolOperator = operatorsSymbols[operator]

      if (number === "") {
        window.alert("Digite um número")
        return undefined
      }

      if (idBtn === "igual") {
        input.value = number
        feedback.innerHTML = ""
        return undefined
      }

      if (calculo.length === 2) {
        let n1 = calculo[0]
        symbolOperator = calculo[1]
        let n2 = Number(number)

        let resultado = calculadora[symbolOperator](n1, n2)

        calculo.pop(); calculo.pop()

        input.value = resultado
        feedback.innerHTML = ""
        console.log(calculo)

        return undefined
      }

      feedback.innerHTML += ` ${number} ${operator} `
      input.value = ""

      calculo.push(Number(number), symbolOperator)
      console.log(calculo)
    }

    return undefined
  })  
})



