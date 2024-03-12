let elemento = document.getElementById("meuElemento");
    
elemento.style.backgroundColor = "red";


let elementos = document.getElementsByClassName("minhaClasse");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "blue";
    elementos[i].style.fontWeight = "bold";
}


