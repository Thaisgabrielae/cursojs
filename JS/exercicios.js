
//solicitar 3 numeros e informar se é par ou impar

const rl = require('readline-sync');

for(let i=1; i<=3; i++) {
    let numero = rl.questionInt (`Informe um numero: `)
  
    if ( numero % 2 == 0) {
        console.log(`O numero ${numero} é par.`);
    } else {
        console.log(`O numero ${numero} é ímpar.`);
    }
}