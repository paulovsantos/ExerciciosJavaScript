var nComputador = '';
var nJogador = '';
var minhaEscolha = '';

function sortear(max){
    return Math.floor(Math.random() * max);
}

function jogar(){
    nJogador = document.querySelector('#meuNumero').value;
    nComputador = sortear(5);
    minhaEscolha = document.querySelector('input[type="radio"]:checked').value
    console.log('minhaEscolha', minhaEscolha)
    if(!nJogador){
        return alert('primeiro digite um numero');
    }
    
    nJogador = parseInt(nJogador);
    
    var total = nJogador + nComputador;
    
    var resultado = (total % 2 === 0) ? 'par' : 'impar';
    
    verificarResultado(resultado)
    
}

function verificarResultado(resultado){
    if(minhaEscolha === resultado){
        alert('eu ganhei');
    } else {
        alert('o computador ganhou');
    }
    console.log('nJogador', nJogador)
    console.log('nComputador', nComputador)
}