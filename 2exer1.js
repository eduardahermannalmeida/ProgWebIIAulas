// 1. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado e
// exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade
// permitida.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual a velocidade (em Km/h) de seu carro?\n", (vel) =>{
    if (parseInt(vel) > 80){
        console.log(`Você foi MULTADO!\nSua multa é no valor de: R$${((parseInt(vel)-80)*5).toFixed(2)}.`);
    } else{
        console.log(`Você está dentro da velocidade permitida.`);
    }
    rl.close();
});
