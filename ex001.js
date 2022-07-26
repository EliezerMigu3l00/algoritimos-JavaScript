const livros = require('./listaLivros')

let maisBarato = 0

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`O livro que tem o titulo de ${livros[maisBarato].titulo} é o mais barato e custa ${livros[maisBarato].preco} reais`)