function feedback(tipo_feedback, campo) {
  // Selecionando o span que exibirá o feedback na página
  let fdb = document.querySelector(`span#feedback_${campo}`)
  // Resetando o conteúdo e as classes do feedback caso este já os possua com algum valor
  fdb.className = fdb.innerHTML = ""

  // Classes que serão adicionadas quando o campo for válido
  let classes_ok = "p-1 text-primary"
  // Imagem a ser exibida quando o campo for válido
  let img_ok = "<img src='../images/check-circle.svg' alt='Sinalzinho de que algo está checado.'>"

  // Classes que serão adicionadas quando o campo for inválido
  let classes_error = "p-1 text-danger"
  // Imagem a ser exibida quando o campo for válido
  let img_error = "<img src='../images/shield-exclamation.svg' alt='Escudo de alerta de que algo está errado.'> Informe um email válido."
  
  // Campo válido
  if (tipo_feedback) { 
    fdb.className = classes_ok
    fdb.innerHTML = img_ok + `${campo} válido.`
  } 
  // Campo inválido
  else { 
    fdb.className = classes_error
    fdb.innerHTML = img_error + `${campo} inválido.`
  }

}

export { feedback }