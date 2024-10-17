
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


//tabuada
const rl = require('readline-sync');
const tabuada = rl.questionInt("Qual a tabuada desejada? ");
for(let multiplicador = 1; multiplicador <=10; multiplicador++) {

console.log(`${tabuada} x ${multiplicador} = ${tabuada * multiplicador++}`);

}



// pedir 4 notas e fazer a media

const rl = require('readline-sync');

let soma = 0;

for(let i = 1; i <= 4; i++) {
    let nota = rl.questionFloat(`Informe a nota ${i} do aluno: `);
    soma = soma + nota;
}
const media = soma / 4;
console.log(media.toFixed(2));




const readline = require('readline-sync');

let soma = 0;

while(soma < 100) {
    let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
    soma = soma + numero;
    console.log("soma: ", soma);
}


WHILE --- Enquanto
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

const readline = require('readline-sync');

let valor = 0;
while(valor % 5 == 0) {
    valor = readline.questionInt("Informe um numero multiplo de 5: ");
    if (valor % 5 == 0) {
        console.log('Numero: ', valor);
        console.log('É múltiplo de 5')
    } else {
        console.log('Numero: ', valor);
        console.log('Não é múltiplo de 5')
    }
}
