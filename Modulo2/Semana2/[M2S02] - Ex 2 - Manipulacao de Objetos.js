function filtrarAdultos(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome);
}

let pessoas = [
    { nome: 'Letícia', idade: 27 },
    { nome: 'Junior', idade: 32 },
    { nome: 'Nicolas', idade: 26 },
    { nome: 'Vanessa', idade: 29 }
];

console.log(filtrarAdultos(pessoas));
