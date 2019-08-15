// fuja do escopo global
var numero = 1
{
    var numero = 2
    console.log('Valor dentro do bloco =', numero)
}
console.log('Valor fora do bloco =', numero)