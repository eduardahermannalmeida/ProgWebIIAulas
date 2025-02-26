// 5. Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km
// para viagens até 200Km e R$0.45 para viagens mais longas.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("- Olá passageiro! Qual distância você deseja percorrer em Km abaixo:\n", (dis) =>{
    if(parseInt(dis) <= 200){
        console.log(`RESULTADO\nCaro passageiro, você terá que pagar um total de R$${(parseInt(dis)*0.50).toFixed(2)} em passagem.`);
    } else{
        console.log(`RESULTADO\nCaro passageiro, você terá que pagar um total de R$${(parseInt(dis)*0.45).toFixed(2)} em passagem.`);
    }
    rl.close();
});