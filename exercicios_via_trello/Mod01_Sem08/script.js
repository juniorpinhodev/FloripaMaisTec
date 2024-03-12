let elemento = document.getElementById("meuElemento");
    
elemento.style.backgroundColor = "red";


let elementos = document.getElementsByClassName("minhaClasse");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Novo texto do elemento " + (i + 1);
}


// Cria um novo elemento <p>
var novoElemento = document.createElement("p");

// Adiciona texto ao novo elemento
novoElemento.textContent = "Este é um novo parágrafo";

// Seleciona o elemento pai 
var elementoPai = document.getElementById("meuElemento");

// Adiciona o novo elemento como filho do elemento pai
elementoPai.appendChild(novoElemento);
