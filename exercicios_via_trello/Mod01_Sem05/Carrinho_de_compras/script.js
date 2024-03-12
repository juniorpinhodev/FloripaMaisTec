// Lista de produtos e preços
const produtos = {
    "arroz": 10.00,
    "feijão": 8.00,
    "macarrão": 5.00,
    "café": 7.50,
    "leite": 3.49,
    "pão": 5.50,
    
};

// Carrinho de compras do usuário
let carrinho = [];

function consultarPreco() {
    const produtoInput = document.getElementById('produto').value.toLowerCase();
    if (produtos.hasOwnProperty(produtoInput)) {
        const preco = produtos[produtoInput];
        document.getElementById('resultado').innerText = `O preço do produto "${produtoInput}" é R$ ${preco.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = `Produto "${produtoInput}" não encontrado.`;
    }
}

function comprarProduto() {
    const produtoInput = document.getElementById('produto').value.toLowerCase();
    if (produtos.hasOwnProperty(produtoInput)) {
        carrinho.push({ nome: produtoInput, preco: produtos[produtoInput] });
        alert(`Produto "${produtoInput}" adicionado ao carrinho.`);
    } else {
        alert(`Produto "${produtoInput}" não encontrado.`);
    }
}

function calcularTotal() {
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco;
    });

    if (total > 0) {
        document.getElementById('total').innerText = `Total da compra: R$ ${total.toFixed(2)}`;
    } else {
        document.getElementById('total').innerText = 'Carrinho vazio';
    }
}