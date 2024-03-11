// Lista de produtos e preços
const produtos = {
    "arroz": 10.00,
    "feijão": 8.00,
    "macarrão": 5.00,
    "café": 7.50
};

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
        alert(`Produto "${produtoInput}" comprado com sucesso por R$ ${produtos[produtoInput].toFixed(2)}!`);
    } else {
        alert(`Produto "${produtoInput}" não encontrado.`);
    }
}
cd