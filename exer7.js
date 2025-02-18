// 7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Quantos Reais você tem em sua carteira?\nR$", (din) =>{
    console.log(`Isso significa que você pode comprar por volta de U$${(parseInt(din)/5.60).toFixed(2)}!`)
    rl.close();
});