// 2. Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Informe um ano e direi se ele é bissexto ou não: ", (num) =>{
    if (parseInt(num) % 4 == 0){
        console.log(`O ano ${num} é bissexto.`);
    } else {
        console.log(`O ano ${num} não é bissexto.`);
    }
    rl.close();
});