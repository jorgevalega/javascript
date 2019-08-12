// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2, 5, 6, 7)

// função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))
console.log(soma())