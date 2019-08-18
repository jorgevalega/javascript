// Sintaxe:
// condition ? expr1 : expr2
//
// Parâmetros:
// condition: uma expressão que é avaliada como true ou false
// expr1, expr2: Expressões com valores de qualquer tipo
//
// Descrição:
// Se contition é true, o operador retornará o valor de expr1; se não
// ele retorna o valor de expr2


const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const status = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'