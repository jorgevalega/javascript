/* Variáveis definidas com a palavra reservada var 
tem escopo global e tem escopo de função.
Variáveis definidas com a palavra reservada let 
tem escopo global, escopo de função e espoco de bloco
*/
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)