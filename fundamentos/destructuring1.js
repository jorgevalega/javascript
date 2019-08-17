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