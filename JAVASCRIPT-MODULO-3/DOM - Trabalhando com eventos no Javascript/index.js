function register(evento) { 
    // Exibe o objeto de evento no console para depuração.
    console.log(evento)

    // Obtém o elemento pai do botão que disparou o evento.
    // 'evento.currentTarget' é o botão que disparou o evento.
    // '.parentNode' é o nó pai do botão, que é um elemento <section>.
    // evento é o objeto de evento disparado ao clicar no botão
    // esse objeto tem propriedades e métodos
    // currentTarget é o elemento que disparou o evento.
    // parentNode é o nó pai do elemento que disparou o evento.
    const sectionElement = evento.currentTarget.parentNode 

    // Acessa os elementos de entrada dentro do elemento <section>.
    // 'sectionElement.children' retorna uma coleção de elementos filhos.
    // 'username', 'password', e 'passwordConfirmation' são os campos dentro da <section>.
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }
  
  function removeEvent() {
    button.removeEventListener("click", register)
    alert("Event Removed")
  }
  
  // CÓDIGO COMEÇA AQUI
  const button = document.getElementById("register-button")
  
  button.addEventListener("click", register) // ao clicar no botão, vai disparar um objeto de evento (que basicamente são as informações do evento ocorrido) e esse objeto de evento é passado como parâmetro para 2 funções

  button.addEventListener("mouseover", function (evento) {
    console.log(evento)
  })

  // FAZER UM RESUMO MELHOR DE EVENT
  /* 
(evento) é um parâmetro que é um objeto de evento.
Um objeto de evento é uma representação do evento que ocorreu, como um clique em um botão, a passagem do mouse sobre um elemento, uma tecla pressionada, etc. Esse objeto contém várias propriedades e métodos que fornecem informações sobre o evento e o contexto em que ocorreu.
*/

/*
addEventListener 'Ouvidor de eventos'
  sintaxe:
  element.addEventListener('evento', função de callback)

  Parâmetros:
  O 'element' é o elemento HTML que está disparando o evento.
  O evento é uma palavra reservada que identifica o evento, como "click", "mouseover", etc.
  A função de callback é a função que será executada quando o evento ocorrer.

  O vscode exibe todas as palavras reservadas para evento.
  */