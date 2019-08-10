const pessoa1 = {nome: 'Jorge Valega', idade: 42}
console.log(pessoa1)

const pessoa2 = pessoa1 // atribuição por referencia
// pessoa1 e pessoa2 tem a referencia do mesmo objeto
// os dois apontam ao mesmo local de memôria
pessoa2.nome = 'João Perez'
console.log(pessoa1)


// copia do valor, são independentes
let teste1 = 5
let teste2 = teste1
teste2++
console.log(teste1)
console.log(teste2)

let teste3 // não inicializada
console.log(teste3) 

teste3 = null // ausência de valor
console.log(teste3)
// console.log(teste3.toString()) // erro

const produto = {}
console.log(produto.preco) // não está definido o preço do produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)