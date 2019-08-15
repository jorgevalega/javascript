// Hoisting, jogar para cima
// é uma curiosidade da linguagem
console.log('a =', a)
var a = 2
console.log('a =', a)

// é o mesmo resultado
var b
console.log('b =', b)
b = 2
console.log('b =', b)

// a variável let não tem o efeito de Hoisting
console.log('c =', c)
let c = 4
console.log('c =', c)
