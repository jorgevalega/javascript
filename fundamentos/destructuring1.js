// novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 1234
    }
}

// forma padrão
//const nome = pessoa.nome
//const idade = pessoa.idade
//console.log(nome)
//console.log(idade)

// usando operador Destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, altura = true } = pessoa
console.log(sobrenome, altura)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// vai dar erro desse jeito
// const { conta: { ag, num } } = pessoa
// console.log(ag, num)