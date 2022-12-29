const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.id)
    console.log(calculadora[e.currentTarget.id](4, 5))
  })
})

const calculadora = {
  "somar": (a, b) => { return a + b },
  "subtrair": (a, b) => { return a - b },
  "dividir": (a, b) => { return a / b },
  "multiplicar": (a, b) => { return a * b }
}
