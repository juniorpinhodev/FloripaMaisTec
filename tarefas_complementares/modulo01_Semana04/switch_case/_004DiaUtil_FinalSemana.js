// Crie um programa que classifique um dia como útil ou final de semana.

let dia = parseInt(prompt("Digite o número do dia (1 a 7):"));
 
switch(dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia útil.");
        break;
    case 6:
    case 7:
        console.log("Final de semana.");
        break;
    default:
        console.log("Dia inválido.");
}
