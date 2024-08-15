function criarFormulario() {
    const form = document.createElement('form')
        form.id = 'form'
        form.action = ""
        form.method = "post"
        form.className = "formulario"

    const ul = document.createElement('ul')

    const tituloForm = document.createElement('h2')
        tituloForm.innerText = 'Formulário para escalar jogador: '
    
    const nomeLi = document.createElement('li')
        nomeLi.innerHTML = '<label for="nome">Nome do Jogador: </label>'
    const nomeInput = document.createElement('input')
        nomeInput.type = 'text'
        nomeInput.name = 'nome'
        nomeInput.id = 'nome'
        nomeInput.required = true

    const posicaoLi = document.createElement('li')
        posicaoLi.innerHTML = '<label for="pos">Posição: </label>'
    const posicaoInput = document.createElement('input')
        posicaoInput.type = 'text'
        posicaoInput.name = 'pos'
        posicaoInput.id = 'pos'
        posicaoInput.required = true

    const numeroLi = document.createElement('li')
        numeroLi.innerHTML = '<label for="num">Número da Camisa: </label>'
    const numeroInput = document.createElement('input')
        numeroInput.type = 'text'
        numeroInput.name = 'num'
        numeroInput.id = 'num'
        numeroInput.required = true

    nomeLi.appendChild(nomeInput)
    posicaoLi.appendChild(posicaoInput)
    numeroLi.appendChild(numeroInput)
    ul.append(nomeLi, posicaoLi, numeroLi)
    form.append(tituloForm, ul)

    return form
}

function escalarJogador(){
    const nome = document.getElementById('nome').value //pega o valor do elemento com id nome
    const posicao = document.getElementById('pos').value
    const numero = document.getElementById('num').value

    const confirmacao = confirm(
        "Você confirma as seguintes informações?\n" +
        "\nNome do jogador: " + nome +
        "\nPosição: " + posicao +
        "\nNúmero da camisa: " + numero
    )

    if(confirmacao) {
        const ul2 = document.createElement('ul')
            ul2.id = 'lista-jogadores'

        const nomeLi2 = document.createElement('li')
            nomeLi2.innerText = 'Nome do jogador: '
        const nomeP = document.createElement('p')
            nomeP.innerText = nome
            nomeP.id = 'nome-jogador'

        const posicaoLi2 = document.createElement('li')
            posicaoLi2.innerText = 'Posição: '
        const posicaoP = document.createElement('p')
            posicaoP.innerText = posicao
            posicaoP.id = 'pos-jogador'

        const numeroLi2 = document.createElement('li')
            numeroLi2.innerText = 'Número da camisa: '
        const numeroP = document.createElement('p')
            numeroP.innerText = numero
            numeroP.id = 'num-jogador'
        
        nomeLi2.appendChild(nomeP)
        posicaoLi2.appendChild(posicaoP)
        numeroLi2.appendChild(numeroP)
        ul2.append(nomeLi2, posicaoLi2, numeroLi2)
        document.getElementById('container-main').appendChild(ul2)
        document.getElementById('form').reset() //reseta o form depois de preeenchido
    }
}

/**
 Lógica para remover jogador:
 1. Verifica se o prompt recebeu um número inteiro
 2. Procura o jogador na lista de jogadores (iteração)
 3. Se o jogador foi encontrado, remove o elemento da lista
 4. Se o jogador não foi encontrado, exibe uma mensagem de alerta
 */
function removerJogador() {
    const jogadorARemover = prompt('Qual é o número da camisa do jogador que deseja remover da escalação do time?')

    if(Number.isInteger(Number(jogadorARemover))){ //transforma o input de jogadorARemover para um número e depois verifica se é int
        const listaJogadores = document.querySelectorAll('#lista-jogadores') //querySelectorAll pega todos os filhos de um nó e os armazenam em um nodelist (semelhante a um array)
        //console.log(listaJogadores)

        for(let i = 0; i < listaJogadores.length; i++) { // itera sobre o array listaJogadores
            const numeroCamisa = listaJogadores[i].querySelector('#num-jogador').innerText // seleciona o número da camisa do jogador da iteração da vez

            if(numeroCamisa === jogadorARemover) { // verifica se o n° da camisa do jogador da iteração da vez é igual ao número recebido pelo prompt
                confirmacao = confirm(
                    "Você confirma a remoção do jogador " + listaJogadores[i].querySelector('#nome-jogador').innerText + "?" //seleciona o texto do elemento declarado pelo id nome-jogador
                )
                if(confirmacao) {
                    listaJogadores[i].remove() // remove o nó
                    alert('Jogador removido com sucesso!')
                }
            }
            //console.log(numeroCamisa)
        }
    } else {
        alert("O número da camisa do jogador deve ser um número inteiro.")
    }

}

function criarBotoes() {
    const botao_escalar = document.createElement('button')
        botao_escalar.innerText = 'Escalar'
        botao_escalar.type = 'button'
        botao_escalar.addEventListener("click", escalarJogador) // ao ser clicado puxa a função escalarJogador

    const botao_remover = document.createElement('button')
        botao_remover.innerText = 'Remover'
        botao_remover.type = 'button'
        botao_remover.addEventListener("click", removerJogador) // ao ser clicado puxa a função removerJogador

    return [botao_escalar, botao_remover] //retorna um array contendo os botões
}

function gerenciaEscala(botao_gerenciaEscala){
    const div1 = document.getElementById('container-main')

    const formulario = criarFormulario()

    const botoes = criarBotoes()

    formulario.append(...botoes) //(...) 'spread': sintaxe para passar os elementos do array como argumentos individuais
    div1.appendChild(formulario)

    botao_gerenciaEscala.disabled = true //desativa o botão 'Gerenciar Escala' após ser usado, foi passado como parâmetro
}

/* createElement sintaxe
createElement(tagName)
createElement(tagName, options) */