const listaLivros = require('./arrays-2');

function quickSort(array, esquerda, direita){
    if(array.length < 1){
        let varTemp = particiona(array, esquerda, direita)
    }


    return array;
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsqueda = esquerda;
    let atualDireita = direita;

    while(atualEsqueda <= atualDireita)0{
        while (array[atualEsqueda].preco < pivo.preco) {
            atualEsqueda++
        }
        while () {
            
        }
    }
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))