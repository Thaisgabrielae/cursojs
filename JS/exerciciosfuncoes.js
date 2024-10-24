// const readline = require('readline-sync');

// const numero1 = readline.questionInt("Informe o primeiro numero: ");
// const operacao = readline.question("Informe a operacao desejada (+ - * / ): ");
// const numero2 = readline.questionInt("Informe o segundo numero: ");
// let resultado;

// const soma = (n1, n2) => n1 + n2;
// const subtracao = (n1, n2) => n1 - n2
// const multiplicacao = (n1, n2) => n1 * n2;
// const divisao = (n1, n2) =>  n1 / n2;


// if (operacao == "+") {
//     resultado = soma(numero1, numero2);
// } else if (operacao == "-") {
//     resultado = subtracao(numero1, numero2);
// } else if (operacao == "*") {
//     resultado = multiplicacao(numero1, numero2);
// } else if (operacao == "/") {
//     resultado = divisao(numero1, numero2);
// }

// console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);

// const itens = [
//     {id: 1, descricao: "Arrumar a Casa", status: true},
//     {id: 2, descricao: "Arrumar o Escritório", status: true},
//     {id: 3, descricao: "Levar a Filó no PetShop", status: false},
//     {id: 4, descricao: "Tirar o lixo", status: false},
//     {id: 5, descricao: "Fazer as compras", status: true},
// ]

// itens.forEach(itens => {
//    if (itens.status == true) {
//     console.log(`[x] ${itens.descricao}`);
//    } else {
//     console.log(`[ ] ${itens.descricao}`);
//    }

// });

// Converta os elementos da lista abaixo, para letra maiúscula (toUpperCase)
const palavras = ["bola", "tênis", "carro", "celular", "computador"];
const palavrasMaiusculas = palavras.map( palavras => palavras.toUpperCase());
//const palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase() );
console.log(palavrasMaiusculas);

// Adicione 3 nomes a nossa lista de nomes.
const nomes = [];
nomes.unshift("Thais", "Mavi", "Tha");


console.log(nomes)