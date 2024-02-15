// Faça um programa que verifique se um número é positivo, negativo ou zero.

let numero = parseFloat(prompt("Digite um número:"));
 
switch(true) {
    case numero > 0:
        console.log("O número é positivo.");
        break;
    case numero < 0:
        console.log("O número é negativo.");
        break;
    default:
        console.log("O número é zero.");
}