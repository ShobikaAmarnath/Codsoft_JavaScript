document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartLink = document.getElementById('view-cart');
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cartCount = 0;
    let totalAmount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-id');
            const productTitle = button.parentNode.querySelector('h2').textContent;
            const productPrice = parseFloat(button.parentNode.querySelector('p').textContent.replace('Rs ', ''));

            const newItem = document.createElement('li');
            newItem.textContent = `${productTitle} - Rs ${productPrice.toFixed(2)}`;
            cartItems.appendChild(newItem);

            cartCount++;
            totalAmount += productPrice;
            cartTotal.textContent = `Rs ${totalAmount.toFixed(2)}`;
            viewCartLink.textContent = `Cart (${cartCount})`;
        });
    });

    viewCartLink.addEventListener('click', function(event) {
        event.preventDefault();
        cart.classList.toggle('hidden');
    });
});
