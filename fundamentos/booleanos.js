let teste1 = false
console.log(teste1)

teste1 = true
console.log(teste1)

teste1 = 1
console.log(!!teste1)

console.log('os verdadeiros:')
console.log(!!7)
console.log(!!0.0125)
console.log(!!-8)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(teste1 = true))

console.log('os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(teste1 = false))

console.log('por último:')
console.log(!!('' || null || 0 || ' ')) // um dos valores é verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // evitando quando o nome está vazio, para valor padrão