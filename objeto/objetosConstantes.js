// pessoa -> 123 -> {...}
const pessoa = { nome: 'Raquel' }
pessoa.nome = 'Rachel'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
pessoa.nome = 'Rachelle'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)
