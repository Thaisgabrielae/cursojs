// npm install readline-sync
const readline = require("readline-sync");

// Função Padrão - Função Nominal
function nomeDaFuncao() {
    console.log("isso é parte da minha função.");
    console.log("isso também é da função.");
}

function dizOla(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}. Eu sou uma função que sei dizer olá.`);
}

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Função Atribuída (função sem nome p uma variável)
const somatorio = function (numero1, numero2) {
    return numero1 + numero2;
}

// Função Anônima em Callback
function somaMaisUm(numero, fnAdicionarUm) {
    console.log(typeof numero);
    console.log(typeof fnAdicionarUm);
    let resultado = fnAdicionarUm(numero);

    return resultado;
}

// Funções Flechas - Arrow Functions
const maisUm = n => n + 1;
const hello = frase => console.log(`Hello ${frase}`);

// Arrow Function com 2 parâmetros
const soma = (n1, n2) => n1 + n2;

// Arrow Function com múltiplas linhas
const contarUmaPiada = () => {
    console.log("Um pato chegou pro outro e disse QUACK.");
    console.log("O outro disse: Putz era isso que eu dizer.");
}

console.log('somatorio', somatorio(5, 9));

console.log('somaMaisUm', somaMaisUm(8, function(n) {
    return n + 1;
}));
//ou 
console.log('somaMaisUm', somaMaisUm(8, n => n + 1)); //n => (arrow function) - funcao anonima

console.log('maisUm', maisUm(7));
hello("World");
console.log('soma', soma(7, 8));
contarUmaPiada();

const listaNumeros = [1,2,3];

let resultado = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    resultado = resultado + listaNumeros[i];
}

console.log('for', resultado);

//ou

let resultadoReduce1 = listaNumeros.reduce(function (valorAnterior, valorAtual) {
    return valorAnterior + valorAtual;
}, 0);

console.log('resultadoReduce1', resultadoReduce1);

//ou

let resultadoReduce2 = listaNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log('resultadoReduce2', resultadoReduce2);


//FUNCOES
// Reduce = Reduzir o conteúdo para um único valor.
const listaNumeros = [1,2,3];
let resultadoReduce2 = listaNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log('resultadoReduce2', resultadoReduce2);

const listaNomes = ["João", "Maria", "José"];
console.log(listaNomes.reduce( (nomes, nomeAtual) => `${nomes}, ${nomeAtual}`, ""));

// join = Juntas as partes de um Array, utilizando uma "cola"
console.log(listaNomes.join(", "));

// map = Transformar como cada item será exibido.
console.log(listaNumeros.map(n => n * n));

const listaObjetos = [
    { id: 1, nome: "Júlio", sobrenome: 'Silva' },
    { id: 2, nome: "Martina", sobrenome: 'Pereira' },
    { id: 3, nome: "José", sobrenome: 'Antonio' }
];

console.log(listaObjetos, listaObjetos.map(pessoa => `${pessoa.id} - ${pessoa.nome} ${pessoa.sobrenome}`));

const listaDadosExcel = [
    [4, "Flávio", "Fúvio"],
    [5, "Flávia", "Doreira"],
    [6, "Donatelo", "De Silva"],
]

console.log(listaDadosExcel, listaDadosExcel.map(pessoa => {
    return {
        "id": pessoa[0],
        "nome": pessoa[1],
        "sobrenome": pessoa[2]
    }
}));

// filter = Filtrar baseado em uma condição
const listaNumerais = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

console.log('Filter Pares', listaNumerais.filter( n => n % 2 == 0));
console.log('Filter Ímpares', listaNumerais.filter( n => n % 2 != 0));

// forEach = Percorrer cada um dos elementos do nosso array. [ for = Para | each = Cada]
listaNumerais.forEach( (num, posicao) => {
    console.log(`${posicao} --- num ${num}`);
});

console.log(listaNumerais.length);


const email = "fulano.beltrano@gmail.com";
// split = Dividir uma string, passando entre parênteses o valor que será utilizado como base da divisão
console.log(email.split("@"));

// find = para localizar algum elemento (find = procurar)
const frutas = ["maçã", "banana", "laranja", "melão", "melância"];
console.log(frutas.find( fruta => fruta.startsWith("m"))); //retorna o primeiro elemento
console.log(frutas.filter( fruta => fruta.startsWith("m"))); //retorna todos