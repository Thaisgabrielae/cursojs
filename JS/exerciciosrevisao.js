 const readline = require('readline-sync')

 // 1 - Faça um programa que leia um número e identifique se ele é PAR ou Ímpar.
 
// const numero = readline.questionInt ('Informe um numero: ');
// if (numero % 2 ==0 ){
//     console.log(`numero: ${numero} é par`);
    
// } else {
//     console.log(`numero: ${numero} é impar`);
// }

//2 - Escreva um programa que imprima os números de 1 à 20.
// let i = 0;
// while (i<=20){
//     console.log(i);
//     i++
// }

//3 - Escreva um programa que receba 4 notas de um aluno e imprima a sua média final.
 
// let soma = 0;
// for(let i=1; i<=4; i++){
// let nota = readline.questionFloat(`Informe as notas: ${i}`);
// soma = soma + nota;

// }

// const media = soma/4;
// console.log (media);

// 4 - Escreva uma função chamada DOBRO que recebe um número e devolve o seu dobro.

// let numero = readline.questionInt ('Informe um numero: ');
// function dobro(numero) {
//     return numero * 2;
// }
// let numeroDobrado = dobro(numero);

// console.log(`O dobro de ${numero} é ${numeroDobrado}`);

// 5 - Escreva um programa que imprima os múltiplos de 3 e 5 simultaneamente entre 1 e 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }
  // e   &&
 // ou  ||
  
//  6 - Escreva um programa que irá receber 2 valores e deverá informar qual é o maior e qual é o menor.

// const n1 = readline.questionInt ('informe o primeiro numero: ');
// const n2 = readline.questionInt ('informe o segundo valor: ');
// if (n1 > n2) {
//     console.log(`o maior numero é ${n1} e o menor é ${n2} `);
// }else {
//     console.log (`o maior numero é ${n2} e o menor numero é ${n1} `);
// }


//  * 7 - Escreva um programa que irá receber 4 números e deverá informar a soma de todos os números, o menor número e o maior número, além da média dos valores.


// const n1 = readline.questionFloat("Informe o primeiro numero: ");
// const n2 = readline.questionFloat("Informe o segundo numero: ");
// const n3 = readline.questionFloat("Informe o terceiro numero: ");
// const n4 = readline.questionFloat("Informe o quarto numero: ");

// const soma = n1 + n2 + n3 + n4;
// const media = soma / 4;

// let maior = n1;
// let menor = n1;

// if (n2 > maior) {
//     maior = n2;
// }
// if (n3 > maior) {
//     maior = n3;
// }
// if (n4 > maior) {
//     maior = n4;
// }

// if (n2 < menor) {
//     menor = n2;
// }
// if (n3 < menor) {
//     menor = n3;
// }
// if (n4 < menor) {
//     menor = n4;
// }

// console.log(`A soma dos valores é: ${soma}`);
// console.log(`A média dos valores é: ${media.toFixed(2)}`);
// console.log(`O maior valor é: ${maior}`);
// console.log(`O menor valor é: ${menor}`);



// //  * 8 - Escreva um programa para calcular a soma dos números de 1 a 100.
// //  * Saída esperada: "A soma dos números de 1 à 100 é 5050."

// let soma = 0;
// for (let i = 1; i <= 100; i++) 
//    soma = soma + i     
//  console.log(`A soma dos numeros de 1 à 100 é ${soma}`);


//OU

// const calcularSoma = () => {
//   let soma = 0;

//   for (let i = 1; i <= 100; i++) {
//       soma += i; // soma = soma + i;
//   }

//   console.log(`A soma dos números de 1 a 100 é ${soma}`);
// }

// calcularSoma();

//  * 9 - Escreva um programa que tenha uma função chamada ehPrimo. Receba um número informado pelo usuário, passe ele para a função. Se o número for primo, deverá retornar true, senão false.


// const numero = readline.question ("informe um numero: ");


// function ehPrimo(numero) {
//   for (let i = 2; i < numero; i++) {
//       if (numero % i == 0) {
//           return false;
//       }
//   }

//   return true;
// }

// const num = readline.questionInt("Informe um numero: ");

// if (ehPrimo(num)) {
//   console.log(`O número ${num} é um número primo.`);
// } else {
//   console.log(`O número ${num} não é um número primo.`);
// }


//  * 10 - Escreva um programa que receba vários números pelo usuário, números positivos e negativos. Quando o usuário digitar 0 (zero), deverá parar de pedir números para o usuário e deverá retornar QUANTOS NUMEROS POSITIVOS FORAM INFORMADOS, QUANTOS NUMEROS NEGATIVOS FORAM INFORMADOS e QUANTOS NUMEROS FORAM INFORMADOS AO TODO.
//  */

let quantidadePositivo = 0;
let quantidadeNegativo = 0;

let numeroInformado;

while(numeroInformado != 0) {
    numeroInformado = readline.questionInt("Informe um numero: ");

    if (numeroInformado != 0) {
        if (numeroInformado > 0) {
            quantidadePositivo++;
        } else {
            quantidadeNegativo++;
        }
    }
}

console.log(`A quantidade de números informados foi ${quantidadeNegativo + quantidadePositivo}`);
console.log(`A quantidade de números positivos foi ${quantidadePositivo}`);
console.log(`A quantidade de números negativos foi ${quantidadeNegativo}`);

