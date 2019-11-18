const notas = [8.1, 9.3, 7.2, 6.5]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Raquel',
    sobrenome: 'Freitas',
    idade: 32,
    peso: 63
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}