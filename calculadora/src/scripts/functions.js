export function insertDigit(input, button) {
  let inputValue = input.value
  let btnText = button.textContent  

  // Apenas uma vírgula pode ser adicionada
  if (inputValue.includes(",") && btnText === ',') {
    window.alert("Tu só podes adicionar uma vírgula apenas")
  }
  // Insere o dígito no input caso seja válido 
  else {
    input.value += btnText
  }
}

export function removeDigit(input) {
  let inputValue = input.value
  inputValue = inputValue.slice(0, inputValue.length - 1)
  input.value = inputValue
}

export function clear(input) {
  input.value = ""
}

export function allClear(input, feedback) {
  input.value = ""
  feedback.innerHTML = ""
  calculadora.n1 = calculadora.n2 = calculadora.operator = undefined
}

export function validateInput(input) {
  let value = input.value

  // Validação dos dados do input permitindo a inserção de números com apenas uma vírgula
  let pattern = /^(\d+)([,.]\d+)?$/
  if (! pattern.test(value)) {
    window.alert("Valor inválido. Tente novamente. \nVerifique se você adicionou mais de uma vírgula.")
    return false
  }

  return true
}

const operatorsIconsSymbols = {
  '<i class="fa-sharp fa-solid fa-plus"></i>': "+",
  '<i class="fa-sharp fa-solid fa-minus"></i>': "-",
  '<i class="fa-solid fa-xmark"></i>': "*",
  '<i class="fa-solid fa-divide"></i>': "/",
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

export function calcularMostrarResultado(input, button, feedback) {
  // Validando o valor no input
  if (! validateInput(input)) {
    return undefined
  }

  // Ícone e símbolo do operador
  let operatorIconForm = button.innerHTML
  let symbolOperator = operatorsIconsSymbols[operatorIconForm]

  // Valor informado no input
  let inputValueNumber = Number(input.value.replace(",", "."))

  // Mostrar o resultado do cálculo 
  if (button.id === "igual") {

    // Caso haja valores para serem calculados, mostre o resultado
    if (feedback.innerHTML !== "" && input.value !== "") {
      calculadora.n2 = inputValueNumber

      if (calculadora.n2 === 0 && calculadora.operator === "/") {
        window.alert("Não tem como dividir por 0, digite outro número")
        return undefined
      }

      // Realize a operação, mostre o resultado no input e apague o feedback
      let operacao = calculadora[calculadora.operator]
      input.value = operacao(calculadora.n1, calculadora.n2)
      feedback.innerHTML = ""

      // Como já realizamos o cálculo, vamos resetar a calculadora
      calculadora.n1 = calculadora.n2 = calculadora.operator = undefined
    }
  }
  else {
    // Caso tenha o primeiro número esteja preenchido na calculadora
    if (calculadora.n1 !== undefined) {
      // Adicione o segundo número à calculadora
      calculadora.n2 = inputValueNumber

      // Se o operador presente na calculadora for uma divisão e o segundo número for 0, impede a realização do cálculo
      if (calculadora.n2 === 0 && calculadora.operator === "/") {
        window.alert("Não tem como dividir por 0, digite outro número")
        return undefined
      }

      // Do contrário, realiza a operação

      /**
       * Como a calculadora já tem um valor preenchido e queremos realizar outro cálculo
       * Então o primeiro número (que já está presente na calculadora) será substituído 
       * pelo resultado do cálculo (baseado no operador presente na calculadora (calculadora.operator)) 
       * com o segundo número que informamos no input (o calculadora.n2)
       * 
       * Por fim, o novo operador, será aquele que informamos ao clicar no botão da respectiva operação
       * 
      */ 

      let operacao = calculadora[calculadora.operator]
      calculadora.n1 = operacao(calculadora.n1, calculadora.n2)
      calculadora.operator = symbolOperator
    } 
    // Como não há números na calculadora, vamos adicionar o número que informamos no input e o operador que recebemos ao clicar no botão 
    else {
      calculadora.n1 = inputValueNumber
      calculadora.operator = symbolOperator
    }

    // Por fim, mostrar o resultado no feedback e limpar o input para o usuário informar o próximo número
    feedback.innerHTML = ` ${calculadora.n1} ${calculadora.operator} `
    input.value = ""
  }
}
