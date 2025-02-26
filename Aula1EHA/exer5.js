// 5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Olá aluno(a)! Qual a discliplina que deseja acessar? \n", (disci) =>{
rl.question("\nInforme suas notas para que eu te mostre sua média.\n- 1ª Nota: ", (nota1) =>{
    rl.question("- 2º Nota: ", (nota2) =>{
        console.log(`\nRESULTADO\nSua média em ${disci} é: ${((parseInt(nota1) + parseInt(nota2))/2).toFixed(2)} pontos.`)
        rl.close();
    })
})
});