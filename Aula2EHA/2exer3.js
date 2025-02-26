// 3. Escreva um programa que leia o ano de nascimento de um rapaz e mostre a
// sua situação em relação ao alistamento militar.
// Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
// Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("- Olá rapaz, em que ano você nasceu? Informarei sua situação em relação ao alistamento militar.\n", (anonasc) =>{
    if(2025 - parseInt(anonasc) < 18){
        console.log(`RESULTADO\nFaltam ${18-(2025 - parseInt(anonasc))} ano(s) para o alistamento.`)
    } else if(2025-parseInt(anonasc) === 18){
        console.log(`RESULTADO\nVocê está no ano de alistamento.`);
    }
    else {
        console.log(`RESULTADO\nPassaram-se ${2025 - parseInt(anonasc) - 18} ano(s) desde o alistamento.`)
    }
    rl.close();
});

