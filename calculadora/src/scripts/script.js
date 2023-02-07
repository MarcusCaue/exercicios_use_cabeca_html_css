const allButtons = document.querySelectorAll("button")
const input = document.querySelector("input")
const feedback = document.querySelector("#feedback")

const operatorsSymbols = {
  '<i class="fa-sharp fa-solid fa-plus"></i>': "+",
  '<i class="fa-sharp fa-solid fa-minus"></i>': "-",
  '<i class="fa-solid fa-xmark"></i>': "*",
  '<i class="fa-solid fa-divide"></i>': "/",
  '<i class="fa-solid fa-equals"></i>': "="
}

const calculadora = {
  "+": (a, b) => { return a + b },
  "-": (a, b) => { return a - b },
  "/": (a, b) => { return a / b },
  "*": (a, b) => { return a * b },
  "n1": undefined,
  "n2": undefined,
  "operator": undefined
}

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
        calculadora.n1 = calculadora.n2 = calculadora.operator = undefined
      }
    }

    // Remove um dígito do valor do input
    else if (idBtn === "delete") {
      let inputValue = input.value
      inputValue = inputValue.slice(0, inputValue.length - 1)
      input.value = inputValue
    }

    // Botão igual
    else if (idBtn === "igual") {

      if (feedback.innerHTML !== "" && input.value !== "") {
        calculadora.n2 = Number(input.value)

        if (calculadora.n2 === 0 && calculadora.operator === "/") {
          window.alert("Não tem como dividir por 0, digite outro número")
          return undefined
        }

        input.value = calculadora[calculadora.operator](calculadora.n1, calculadora.n2)
        feedback.innerHTML = ""
        calculadora.n1 = calculadora.n2 = calculadora.operator = undefined
      } else {
        window.alert("Insira os dados para o cálculo por favor")
        return undefined
      }

      return undefined
    }

    // Operações matemática
    else if (classesBtn.contains("operacao")) {
      let operatorIcon = btn.innerHTML
      let inputValue = Number(input.value)
      let symbolOperator = operatorsSymbols[operatorIcon]

      if (inputValue === "") {
        window.alert("Digite um número")
        return undefined
      }

      if (calculadora.n1 !== undefined) {
        calculadora.n2 = inputValue

        if (calculadora.n2 === 0 && calculadora.operator === "/") {
          window.alert("Não tem como dividir por 0, digite outro número")
          return undefined
        }

        // Resultado da operação
        calculadora.n1 = calculadora[calculadora.operator](calculadora.n1, calculadora.n2)
        calculadora.operator = symbolOperator
      } else {
        calculadora.n1 = inputValue
        calculadora.operator = symbolOperator
      }
      
      feedback.innerHTML = ` ${calculadora.n1} ${calculadora.operator} `
      input.value = ""
    }

    return undefined
  })  
})



