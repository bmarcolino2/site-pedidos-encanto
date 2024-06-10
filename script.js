// JavaScript para adicionar funcionalidades ao carrinho
document.addEventListener('DOMContentLoaded', () => {
    const carrinho = [];
    const carrinhoItemsElement = document.getElementById('carrinho-items');
    const totalCarrinhoElement = document.getElementById('total-carrinho');

    window.adicionarAoCarrinho = function(nome, preco) {
        carrinho.push({ nome, preco });
        atualizarCarrinho();
    };
    function atualizarCarrinho() {
        carrinhoItemsElement.innerHTML = '';
        let total = 0;
        carrinho.forEach((item, index) => {
            total += item.preco;
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => {
                carrinho.splice(index, 1);
                atualizarCarrinho();
            };
            itemElement.appendChild(deleteButton);
            carrinhoItemsElement.appendChild(itemElement);
        });
        totalCarrinhoElement.textContent = `Total: R$${total.toFixed(2)}`;
    }
});
