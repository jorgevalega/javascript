const marcaCarro = 'Toyota'

console.log(marcaCarro.charAt(0))
console.log(marcaCarro.charAt(2))
console.log(marcaCarro.charAt(4)) // letra que está no índice 4 dentro da string.
console.log(marcaCarro.charAt(6)) // devolve vazio

console.log(marcaCarro.charCodeAt(2)) // devolve o valor ascii 

console.log(marcaCarro.indexOf('y')) // devolve o índice

console.log(marcaCarro.substring(1)) // devolve a partir do índice 1 até o final
console.log(marcaCarro.substring(0, 3)) // não inclui o íncide 3

console.log('Marca carro: '.concat(marcaCarro).concat('!')) // função de concatenar
console.log('A marca do carro é: '.concat(marcaCarro))