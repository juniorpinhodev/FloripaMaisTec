// Escreva um programa que determine o nome de um polígono a partir do número de lados.
 
let lados = parseInt(prompt("Digite o número de lados do polígono:"));
 
switch(lados) {
    case 3:
        console.log("Triângulo");
        break;
    case 4:
        console.log("Quadrilátero");
        break;
    case 5:
        console.log("Pentágono");
        break;
    case 6:
        console.log("Hexágono");
        break;
    case 7:
        console.log("Heptágono");
        break;
    case 8:
        console.log("Octógono");
        break;
    default:
        console.log("Polígono não identificado");
}
