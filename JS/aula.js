const readline = require('readline-sync')

const nome = readline.question('Qual o seu nome?')

const nota1 = readline.questionFloat ('Qual a nota do 1 bimestre?');
const nota2 = readline.questionFloat ('Qual a nota do 2 bimestre?');
const nota3 = readline.questionFloat ('Qual a nota do 3 bimestre?');
const nota4 = readline.questionFloat ('Qual a nota do 4 bimestre?');

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A media final do aluno ${nome} foi de: ${media.toFixed(2)}`);

