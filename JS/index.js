// Laços de Repetição

// SEI QUANTAS VEZES QUERO EXECUTAR?
// SIM - UTILIZAR FOR
// NÃO - UTILIZAR WHILE


// FOR --- Para
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE --- Enquanto
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
// DO WHILE -- Faça enquanto

let i = 10;
do {
    console.log(i);
    i++;
} while(i < 5);
console.log('Fim do While');

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.unshift("melão");
console.log(frutas, frutas.length);
frutas.pop();
frutas.shift();
console.log(frutas, frutas.lenght);

// Length - Tamanho / Quantidade de elementos
// Push - Incluir no fim do Array
// Unshif - Incluir no começo do Array
// Pop - Remove o último elemento do Array
// Shift - Remove o primeiro elemento do Array
// indexOf - Localizar a posição/indice do elemento no Array








