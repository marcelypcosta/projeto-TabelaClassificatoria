// objeto no javascript
var marcely = {
    nome: 'Marcely',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var gabriel = {
    nome: 'Gabriel',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var lucas = {
    nome: 'Lucas',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var celiane = {
    nome: 'Celiane',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var elementoTabela = document.getElementById('tabelaJogadores') // acessando a area que vai ser adicionada a tabela

exibirNaTela() // chamando a função para funcionar

// função para exibir na tela
function exibirNaTela(){
    elementoTabela.innerHTML = `
        <tr>
            <td>${marcely.nome}</td>
            <td>${marcely.vitoria}</td>
            <td>${marcely.empate}</td>
            <td>${marcely.derrota}</td>
            <td>${marcely.pontos}</td>
            <td><button onClick="adicionarVitoria(marcely)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(marcely)">Empate</button></td>
            <td><button onClick="adicionarDerrota(marcely)">Derrota</button></td>
        </tr>
    `
}

// funções para ao clicar realizar o que se pede na função

function adicionarVitoria(jogador){
    jogador.vitoria += 1 
    jogador.pontos += 3 
    exibirNaTela()
}

function adicionarEmpate(jogador) {
    jogador.empate += 1
    jogador.pontos += 1
    exibirNaTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota += 1
    jogador.pontos += 0
    exibirNaTela()
}