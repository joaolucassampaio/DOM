// Essa é uma forma de controlar os elementos específicos para que possa manipulá-los individualmente ou em conjunto. O que torna a construção da página web mais dinâmica. Essa manipulação acontece na criação de funções específicas para um elemento, ...

// Perceba que a sintaxe de obter um elemento sempre começa com o objeto 'document'

// Abra o live server e olhe o console para entender melhor cada método

function show() {
    // Obter um elemento único a partir do seu id
    const contactList = document.getElementById("contact-list")
    console.log(contactList)

    // Obter vários elementos (HTMLCollection) a partir de um nome de tag
    const liElements = document.getElementsByTagName("li")
    console.log(liElements)

    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)

    // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)

    // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
    // Método mais flexível de todos
    const contacts = document.querySelectorAll("#contact-list > li > label") // '>' significa "dentro"
    console.log(contacts)                                                    // dentro disso aqui > isso aqui
                                                                            // ou seja, pega as label dentro de li e contact-list
    // (. para class e # para id's)
    //  const contacts = document.querySelectorAll(".contact-list > li > label")


    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    /* O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
    Obs.: Repare que também podemos acessar propriedade internas do elemento obtido. */
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
  }