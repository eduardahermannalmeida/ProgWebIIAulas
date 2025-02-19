// [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com
// essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o
// comprimento de cada lado deve ser menor que a soma dos outros dois.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("LEITOR DE SEGMENTOS DE RETA\nOlá lerei o tamanho de três segmentos de reta e se direi se é possível formar 1 triângulo, informe-as abaixo:\n- 1ª reta: ", (r1)=>{
    rl.question("- 2ª reta: ", (r2) => {
        rl.question("- 3ª reta: ", (r3) => {
            if(parseInt(r1) < parseInt(r2) + parseInt(r3) && parseInt(r2) < parseInt(r1) + parseInt(r3) && parseInt(r3) < parseInt(r2) + parseInt(r1)){
                console.log("RESULTADO\nÉ possível formar um triângulo com essas retas!")
            } else {
                console.log("RESULTADO\nNão é possível formar um triângulo com essas retas.")
            }
            rl.close();
        })
    })

});