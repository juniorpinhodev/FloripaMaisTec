let elemento = document.getElementById("meuElemento");
    
elemento.style.backgroundColor = "red";


let elementos = document.getElementsByClassName("minhaClasse");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Novo texto do elemento " + (i + 1);
}

// Seleciona o elemento pai
let elementoPai = document.getElementById("meuElemento");

// Seleciona o elemento filho que deseja remover
let elementoFilho = elementoPai.querySelector("p"); // Supondo que o elemento filho seja um parágrafo (<p>)

// Remove o elemento filho do elemento pai
elementoPai.removeChild(elementoFilho);
