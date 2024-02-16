const inputProduto = document.getElementById('produto')

const respostah4 = document.getElementById('resposta')

function consultarPreco() {
    // transformar para minusculo e remover acentos.
    const produto = inputProduto.value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const resposta = precos(produto)
    respostah4.innerText = resposta
}

function precos(produto) {
    switch (produto) {
        case 'morango':
        case '1':
            return 'R$ 5,99'

        case 'laranja':
        case '2':
            return 'R$ 7,99'

        case 'sair':
        case '0':
            return 'Programa encerrado'

        default:
            return 'Produto não cadastrado.'
    }
}