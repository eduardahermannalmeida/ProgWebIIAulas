// 9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("- Informe quantos dias o funcionário trabalhou no mês: ", (diastra) =>{
    console.log(`RESULTADO\nO funcionário ganhou um salário de R$${(parseInt(diastra)*8*25).toFixed(2)} neste mês.`);
    rl.close();
});

