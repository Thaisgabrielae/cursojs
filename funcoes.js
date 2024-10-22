// npm install readline-sync
const readline = require("readline-sync");

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

nomeDaFuncao();
dizOla("Tafarel", "Chicotti");
nomeCompleto("Tafarel", "Chicotti");

const nome = nomeCompleto("Tafarel", "Chicotti");

console.log(nome, nomeCompleto("Alessandra", "Negrini"));

