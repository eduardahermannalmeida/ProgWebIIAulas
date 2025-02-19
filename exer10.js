// 10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("- Informe o salário do funcionário: ", (sal) =>{
    console.log(`RESULTADO\nO novo salário dele com o aumento de 15% é ${parseInt(sal)+parseInt(sal)*0.15}`);
    rl.close();
});