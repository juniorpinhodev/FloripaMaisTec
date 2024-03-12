// Seleciona o elemento pelo ID
let myDiv = document.getElementById('myDiv');
        
// Remove o atributo 'data-custom'
myDiv.removeAttribute('data-custom');

// Verifica se o atributo foi removido
console.log(myDiv.getAttribute('data-custom')); 