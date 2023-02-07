import * as functions from "./functions.js" 

const calculadora = functions.calculadora


const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => { btn.addEventListener("click", (e) => {
  let operacaoEscolhida = e.currentTarget.id
  let entradaCalculadora = document.querySelector("#conta").value

  // console.log(functions.validaEntrada(entradaCalculadora));
  // let resultado = calculadora[operacaoEscolhida]()

}) })