const numbers = []
const sectionFeedback = document.querySelector("#feedback")

function addNumber() {
  const input = document.querySelector("#addNumber")
  let value = input.value

  if (sectionFeedback.style.display == "block") {
    sectionFeedback.style.display = "none"
  }
  
  if (value == "") {
    alert("Digite um número")
  } else {
    value = parseInt(value)
    if (value > 100 || value < 1) {
      alert("Digite um número entre 1 e 100")
    } else {

      if (numbers.includes(value)) {
        alert("Número já está presente. Não será adicionado.")
      } else {
        numbers.push(value)

        const textarea = document.querySelector("#numbersArray")
        textarea.textContent += `Valor ${value} adicionado. \n`
      }      
    }
  }
  
  input.value = ""
}

function showFeedback() {

  if (numbers.length == 0) {
    alert("Digite um número pelo menos.")
  } else {
    sectionFeedback.style.display = "block"

    let resultados = [ numbers.length, maior(), menor(), soma(), soma() / numbers.length ]
    let spans = document.querySelectorAll("span")

    for (let i = 0; i < spans.length; i++) {
      spans[i].textContent = resultados[i]
    }

  }

}

function soma() {
  let soma = 0
  numbers.forEach((n) => { soma += n })
  return soma
}

function maior() {
  let maior = numbers[0]
  numbers.forEach((n) => { if (n > maior) { maior = n } })
  return maior
}

function menor() {
  let menor = numbers[0]
  numbers.forEach((n) => { if (n < menor) { menor = n } })
  return menor
}

