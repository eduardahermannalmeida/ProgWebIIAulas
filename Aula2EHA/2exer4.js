// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia
// nome, sexo e o valor das compras do cliente e calcule o preço com desconto.
// Homens ganham 5% de desconto
// Mulheres ganham 13% de desconto.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("BEM-VINDO À NOSSA LOJA!\nEstamos atualmente com uma promoção exclusiva para o Dia da Mulher.\nPara efetuar sua compra precisaremos de algumas informações.\n- Qual seu nome? ", (nocli) =>{
    rl.question("- Qual seu gênero? ", (sex) =>{
        rl.question("- E por fim, quanto deu o valor total de suas compras? ", (valto) =>{
            if(sex == "Feminino"){
                console.log(`FINALIZAÇÃO\nCara ${nocli}, suas compras receberam um desconto de 13%!\nO valor total de suas compras foi de R$${(parseInt(valto)-parseInt(valto)*0.13).toFixed(2)}`);
            } else if(sex == ("Masculino")){
                console.log(`FINALIZAÇÃO\nCaro ${nocli}, suas compras receberam um desconto de 5%!\nO valor total de suas compras foi de R$${(parseInt(valto)-parseInt(valto)*0.05).toFixed(2)}`);
            } else{
                console.log(`FINALIZAÇÃO\nCaro ${nocli}, não houve nenhum desconto aplicado à sua compra.\nO valor total de suas compras foi de R$${(parseInt(valto)).toFixed(2)}`);
            }
            rl.close();
        })  
    })

});