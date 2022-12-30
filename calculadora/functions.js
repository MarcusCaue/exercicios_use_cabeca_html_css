export const calculadora = {
  "somar": (a, b) => { return a + b },
  "subtrair": (a, b) => { return a - b },
  "dividir": (a, b) => { return a / b },
  "multiplicar": (a, b) => { return a * b }
}

function temCaracteresAceitos(entrada) {
  // Caracteres Aceitos na Entrada
  let caracteresAceitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "+", "-", "/", "*"]

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
}

// Talvez eu implemente dps...
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

export function validaEntrada(entrada) {
  if (temCaracteresAceitos(entrada)) {
    return "Tudo certo!"
  } else {
    return "Tá errado boy!"
  }
}