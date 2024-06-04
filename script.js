

let cart = [];
let totalPrice = 0.00;

document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', function () {
    let productId = this.getAttribute('data-id');
    let productName = this.getAttribute('data-name');
    let productPrice = parseFloat(this.getAttribute('data-price'));

    addToCart(productId, productName, productPrice);
    updateCartCount();
});
});

document.getElementById('cart-btn').addEventListener('click', function () {
toggleCartItems();
});

function addToCart(id, name, price) {
let existingProduct = cart.find(product => product.id === id);

if (existingProduct) {
    existingProduct.quantity += 1;
} else {
    cart.push({ id, name, price, quantity: 1 });
}

updateTotalPrice();
}

function updateTotalPrice() {
totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function updateCartCount() {
document.getElementById('cart-count').textContent = cart.reduce((total, product) => total + product.quantity, 0);
}

function toggleCartItems() {
let cartItemsContainer = document.getElementById('cart-items-container');
cartItemsContainer.style.display = cartItemsContainer.style.display === 'block' ? 'none' : 'block';
showCartItems();
}

function showCartItems() {
let cartItemsContainer = document.getElementById('cart-items');
cartItemsContainer.innerHTML = ''; // Limpa o conteúdo anterior

cart.forEach(product => {
    let itemElement = document.createElement('div');
    itemElement.textContent = `${product.name} - ${product.quantity} x $${product.price.toFixed(2)}`;
    cartItemsContainer.appendChild(itemElement);
});
}

let total = 0;

function adicionarPedido(nome, preco) {
const listaPedidos = document.getElementById('lista-pedidos');
const pedidoItem = document.createElement('li');
pedidoItem.textContent = `${nome} - R$${preco.toFixed(2)}`;
listaPedidos.appendChild(pedidoItem);

total += preco;
document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarPedido() {
alert(`Pedido finalizado! Total: R$${total.toFixed(2)}`);
const listaPedidos = document.getElementById('lista-pedidos');
listaPedidos.innerHTML = "";
total = 0;
document.getElementById('total').textContent = total.toFixed(2);
}

<section id="carrinho">
    <h2>Carrinho</h2>
    <div id="carrinho-itens">
         Aqui serão exibidos os itens adicionados ao carrinho
    </div>
    <div id="total-carrinho">
         Aqui será exibido o total do carrinho 
    </div>
    <button onclick="limparCarrinho()">Limpar Carrinho</button>
</section>

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const carrinho = document.getElementById('carrinho-itens');
    const totalCarrinho = document.getElementById('total-carrinho');
    
    const item = document.createElement('div');
    item.classList.add('carrinho-item');
    item.innerHTML = `
        <p>${nome} - R$${preco.toFixed(2)}</p>
        <button class="delete-button" onclick="removerDoCarrinho(this)">Remover</button>
    `;
    carrinho.appendChild(item);
    
    // Atualiza o total do carrinho
    const totalAtual = parseFloat(totalCarrinho.innerText.replace('Total: R$', '')) || 0;
    totalCarrinho.innerText = `Total: R$${(totalAtual + preco).toFixed(2)}`;
}

// Função para remover um item do carrinho
function removerDoCarrinho(botao) {
    const carrinho = botao.parentNode.parentNode;
    const totalCarrinho = document.getElementById('total-carrinho');
    const item = botao.parentNode;
    const preco = parseFloat(item.innerText.split('R$')[1]);
    
    carrinho.removeChild(item);

}

// Função para limpar o carrinho
function limparCarrinho() {
    const carrinho = document.getElementById('carrinho-itens');
    const totalCarrinho = document.getElementById('total-carrinho');
    
    carrinho.innerHTML = '';
    totalCarrinho.innerText = 'Total: R$0.00';
}