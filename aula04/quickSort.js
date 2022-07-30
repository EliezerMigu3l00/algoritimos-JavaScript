const listaLivros = require('../aula03/arrays');
const trocaLugar = require('../encontraMenores')

function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual -1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsqueda = esquerda;
    let atualDireita = direita;

    while(atualEsqueda <= atualDireita){
        while (array[atualEsqueda].preco < pivo.preco) {
            atualEsqueda++
        }
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--
        }
        if(atualEsqueda <= atualDireita){
            trocaLugar(array, atualEsqueda, atualDireita);
            atualEsqueda++;
            atualDireita--;
        }
    }
    return atualEsqueda;
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1));