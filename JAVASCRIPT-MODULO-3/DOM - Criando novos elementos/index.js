// Basicamente estou criando elementos HTML através do JAVASCRIPT

/* Criando novos elementos no DOM com javascript

1. Criar o elemento com a função createElement()
2. Adicionar conteúdo a esse elemento
3. Adicionar esse elemento como filho de algum outro */

function addInput() {
    // obtenho o elemento desejado
    // o elemento desejado é passado pelo id (inputs)
    const ul = document.getElementById('inputs')
    
    // criando um novo elemento
    // o tipo do novo elemento criado é passado pelos ()
    // no caso abaixo esta sendo criado um list item
    const newLi = document.createElement('li')
    // aqui embaixo é passado os atributos que vc passaria no html
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: ' //forma mais correta de se adicionar texto em uma tag 
                                    //tbm é possível através do .innerHTML mas necessita de cuidados de segurança a  mais

    // tá sendo criado um input
    const newInput = document.createElement('input')
    // tá sendo passado os atributos desse input
    newInput.type = 'text'
    newInput.name = 'input'

    // aqui está fazendo um append (acrescentando) os elementos criados a um nó/elemento existente
    // se vc quiser adicionar um elemento filho a um elemento pai vc segue a seguinte sintaxe:
    // elementoPai.appendChild(elementoFilho)
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
    // nesse sentido, primeiro estou adicionando o elemento newInput como filho do elemento newLi
    // depois estou adicionando o elemento newLi como filho do elemento ul
  }