// é uma forma de fazer atribuições mais rápidas
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// isso é só como aprendizagem
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)