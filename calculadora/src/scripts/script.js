import * as functions from "./functions.js"

const allButtons = document.querySelectorAll("button")
const input = document.querySelector("input")
const feedback = document.querySelector("#feedback")

// Adicionando o evento de clique para todos os botões
allButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let classesBtn = btn.classList
    let idBtn = btn.id

    // Operações matemática e o igual
    if (classesBtn.contains("operacao")) {
      functions.calcularMostrarResultado(input, btn, feedback)  
    }
    // Dígitos -> São adicionados no input
    else if (classesBtn.contains("digit")) {
      functions.insertDigit(input, btn)
    }
    // Remove um dígito do valor do input
    else if (idBtn === "delete") {
      functions.removeDigit(input)
    }
    // Botões que limpam o valor do input e do feedback
    else if (idBtn === "clear") {
      functions.clear(input)
    } 
    else if (idBtn === "allClear") {
      functions.allClear(input, feedback)
    }
    
    return undefined
  })  
})


