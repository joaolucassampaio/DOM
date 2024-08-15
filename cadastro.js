const form = document.getElementById('form')

const botaoAdicionar = document.getElementById('btn-add')

const botaoCadastro = document.getElementById('btn-cadastro')

const nomeCompletoInput = document.getElementById('nomeCompleto')
    //nomeCompleto = nomeCompletoInput.value
    //console.log(nomeCompleto)

let count = 0

botaoAdicionar.addEventListener('click', function (evento){
    evento.preventDefault()
    count++

    const container_tecnologia = document.createElement('div')
        container_tecnologia.className = 'container-tecnologia'
        container_tecnologia.id = 'container-tecnologia' + count

    const nomeTecnologia = document.createElement('label')
        nomeTecnologia.innerText = 'Nome da Tecnologia: '
    const inputTecnologia = document.createElement('input')
        inputTecnologia.type = 'text'
        inputTecnologia.id = 'nome_tecnologia' + count

    const txtTmpExperiencia = document.createElement('label')
        txtTmpExperiencia.innerText = ' Tempo de Experiência:'
        txtTmpExperiencia.htmlFor = 'exp' + count

    const txtTmpExp1 = document.createElement('label')
        txtTmpExp1.innerText = '0-2 anos'
        txtTmpExp1.htmlFor = 'id-expA' + count
    const tmpExp1 = document.createElement('input')
        tmpExp1.type = 'radio'
        tmpExp1.value = '0-2 anos'
        tmpExp1.name = 'exp' + count
        tmpExp1.id = 'expA' + count

    const txtTmpExp2 = document.createElement('label')
        txtTmpExp2.innerText = '2-4 anos'
        txtTmpExp2.htmlFor = 'expB' + count
    const tmpExp2 = document.createElement('input')
        tmpExp2.type = 'radio'
        tmpExp2.value = '2-4 anos'
        tmpExp2.name = 'exp' + count
        tmpExp2.id = 'expB' + count

    const txtTmpExp3 = document.createElement('label')
        txtTmpExp3.innerText = '5+ anos '
        txtTmpExp3.htmlFor = 'expC' + count
    const tmpExp3 = document.createElement('input')
        tmpExp3.type = 'radio'
        tmpExp3.value = '5+ anos'
        tmpExp3.name = 'exp' + count
        tmpExp3.id = 'expC' + count

    const botaoRemover = document.createElement('button')
        botaoRemover.innerText = 'Remover'
        botaoRemover.id = 'exp' + count //Mesmo id 
        //botaoRemover.type = 'button' Tem que ser tipo button para evitar o envio do formulário, o que permite a adição de funcionalidades diferentes. Da pra fazer isso com preventDefault.
    botaoRemover.addEventListener('click', function(evento) {
        evento.preventDefault() // Previne o comportamento padrão do botão
        container_tecnologia.remove() //Remove o container no qual o botão está presente
    })

    container_tecnologia.append(
        nomeTecnologia, inputTecnologia, 
        txtTmpExperiencia,
        tmpExp1, txtTmpExp1, tmpExp2, txtTmpExp2, tmpExp3, txtTmpExp3, botaoRemover,
        document.createElement('br')
    )

    form.append(container_tecnologia)

    //form.reset()
    //botaoAdicionar.disabled = true
    nomeCompletoInput.readOnly = true

})

botaoCadastro.addEventListener('click', function(evento){
    evento.preventDefault()

    const confirmacao = confirm("Você tem certeza que deseja confirmar o envio do formulário?")
    
    if(confirmacao){
         // Armazenar informações do DEV em um array
         const dev = {
            nomeCompleto: nomeCompletoInput.value,
            tecnologias: []
        };

        const containers_tecnologias = document.querySelectorAll('.container-tecnologia')

        for (let index = 0; index < containers_tecnologias.length; index++) {
            const selectedContainer = containers_tecnologias[index]

            const nome_tecnologia = selectedContainer.querySelector('input[type="text"]').value
            const tempo_experiencia = selectedContainer.querySelector('input[type="radio"]:checked').value

            const tecnologias = {
                nome: nome_tecnologia,
                tempoExperiencia: tempo_experiencia,
                remover: function() {
                    selectedContainer.remove()
                }
            }
        dev.tecnologias.push(tecnologias)
    }
    
    console.log(dev)
    }
    })