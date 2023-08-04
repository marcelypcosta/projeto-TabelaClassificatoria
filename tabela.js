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
        <tr>
            <td>${gabriel.nome}</td>
            <td>${gabriel.vitoria}</td>
            <td>${gabriel.empate}</td>
            <td>${gabriel.derrota}</td>
            <td>${gabriel.pontos}</td>
            <td><button onClick="adicionarVitoria(gabriel)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(gabriel)">Empate</button></td>
            <td><button onClick="adicionarDerrota(gabriel)">Derrota</button></td>
        </tr>
        <tr>
            <td>${lucas.nome}</td>
            <td>${lucas.vitoria}</td>
            <td>${lucas.empate}</td>
            <td>${lucas.derrota}</td>
            <td>${lucas.pontos}</td>
            <td><button onClick="adicionarVitoria(lucas)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(lucas)">Empate</button></td>
            <td><button onClick="adicionarDerrota(lucas)">Derrota</button></td>
        </tr>
        <tr>
            <td>${celiane.nome}</td>
            <td>${celiane.vitoria}</td>
            <td>${celiane.empate}</td>
            <td>${celiane.derrota}</td>
            <td>${celiane.pontos}</td>
            <td><button onClick="adicionarVitoria(celiane)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(celiane)">Empate</button></td>
            <td><button onClick="adicionarDerrota(celiane)">Derrota</button></td>
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