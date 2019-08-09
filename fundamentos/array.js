const umArray = [7.7, 8.8, 6.3, 9.3]
console.log(umArray[0], umArray[2])
console.log(umArray[4]) // undefined, valor indefinido.

umArray[10] = 10
console.log(umArray)
console.log(umArray.length) // o arrey tem 11 elementos 

umArray.push({id: 3}, false, null, 'teste')
console.log(umArray)

console.log(umArray.pop())
delete umArray[0]
console.log(umArray)

console.log(typeof umArray) // o array é de tipo objeto