// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 1234
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)