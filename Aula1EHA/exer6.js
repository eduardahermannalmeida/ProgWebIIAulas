// 6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Olá! Direi qual o antecessor e sucessor de um número.\n- Infome um número: ", (num) =>{
    console.log(`\nRESULTADO\n- Antecessor: ${parseInt(num) - 1}\n- Sucessor ${parseInt(num) + 1}`);
    rl.close();
});