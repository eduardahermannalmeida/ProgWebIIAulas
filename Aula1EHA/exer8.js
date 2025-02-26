// 8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("SERVIÇO DE PINTURA\nInforme os dados da parede para ver quanta tinta será necessária para o serviço.\n - Largura: ", (l) =>{
    rl.question("- Altura: ", (a) =>{
        console.log(`A área da parede é de ${parseInt(a)*parseInt(l)}m², serão necessários ${((parseInt(a)*parseInt(l))/2).toFixed(2)}L de tinta para o serviço.`);
        rl.close();
    })
});