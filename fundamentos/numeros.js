const peso1 = 1.0
const peso2 = 1.1
const peso3 = Number('2.0')
const peso4 = Number('2.2')

console.log(peso1)
console.log(Number.isInteger(peso1))

console.log(peso2)
console.log(Number.isInteger(peso2))

console.log(peso3)
console.log(Number.isInteger(peso3))

console.log(peso4)
console.log(Number.isInteger(peso4))

const avaliacao1 = 9.876
const avaliacao2 = 6.654

const total = avaliacao1 * peso1 + avaliacao2 * peso3 
const media = total / (peso1 + peso3)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)