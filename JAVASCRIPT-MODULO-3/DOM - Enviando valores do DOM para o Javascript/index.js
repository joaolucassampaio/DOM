function register(element) {
    //console.log(element)
    const username = element.children.username.value //elementoPai.PalavraReservadaParaelementoFilho.elementoFilhoNome.valor
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }