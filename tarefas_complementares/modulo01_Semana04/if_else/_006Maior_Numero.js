// Faça um programa que determine o maior de três números informados.

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));
 
if (num1 > num2 && num1 > num3) {
    console.log("O primeiro número é o maior.");
} else if (num2 > num1 && num2 > num3) {
    console.log("O segundo número é o maior.");
} else {
    console.log("O terceiro número é o maior.");
}

