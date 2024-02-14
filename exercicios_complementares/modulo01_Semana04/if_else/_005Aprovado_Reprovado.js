// Escreva um programa que determine se um aluno foi aprovado, reprovado ou está em recuperação, considerando que a nota mínima para aprovação é 7, e para recuperação é 5.
 
let nota = parseFloat(prompt("Digite a nota do aluno:"));
 
if (nota >= 7) {
    console.log("Aluno aprovado.");
} else if (nota >= 5) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}
