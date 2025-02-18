// 3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("- Qual é o nome do funcionário que deseja informar? \n", (nomefun) => {
    rl.question("- Certo, agora informe o salário do funcionário: \n", (sal) =>{
    console.log(`RESULTADO\nOk, portanto o funcionário ${nomefun} recebe R$${sal} por mês.`)
    rl.close();
    })
})