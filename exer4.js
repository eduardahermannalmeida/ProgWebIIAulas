// 4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("SOMADOR DE NÚMEROS\n- Me diga um número para somá-lo a outro: ", (num1) =>{
    rl.question(`- Certo! Com qual número quer somar ${num1}? \n`, (num2) =>{
        num3 = parseInt(num1) + parseInt(num2);
        console.log(`\nRESULTADO:\nA soma de seus dois números é: ${num3}`);
        rl.close();
    })
});
