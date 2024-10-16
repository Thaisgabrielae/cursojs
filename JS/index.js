// Laços de Repetição
// FOR --- Para
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE --- Enquanto
// DO WHILE -- Faça enquanto




// Solicite um número para o usuário e faça a tabuada do 1 até o 10 daquele número
const rl = require('readline-sync');

const tabuada = rl.questionInt("Qual a tabuada desejada? ");

for(let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${tabuada} x ${multiplicador} = ${tabuada*multiplicador}`);
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
