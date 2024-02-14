// Crie um programa que verifique se um número é vogal ou consoante.

let letra = prompt("Digite uma letra:").toLowerCase();
 
switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("A letra é uma vogal.");
        break;
    default:
        console.log("A letra é uma consoante.");
}
