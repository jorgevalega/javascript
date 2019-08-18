function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // entre 40 e 50
console.log(rand([992])) // entre 992 e 1000
console.log(rand([, 10])) // vai assumir o minimo como 0, entre 0 e 10
console.log(rand([])) // entre 0 e 1000
// console.log(rand())