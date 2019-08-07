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
console.log('A marca do carro é: '+ marcaCarro) // o resultado é igual que o anterior


console.log(marcaCarro.replace('a', 4))
console.log(marcaCarro.replace('o', 0))
console.log(marcaCarro.replace(/o/g, 0)) // substutui todas as letras o pelo número 0
console.log(marcaCarro.replace(/t/g, 7)) // não subistitui as maiúsculas
console.log(marcaCarro.replace(/t/gi, 7)) // subistitui todas as letras t 

console.log('Ana,Maria,Pedro'.split(',')) // a vírgula é o separador, virou um array
console.log('Ana,Maria,Pedro'.split(/,/)) // mesma coisa que o anterior com RegEx