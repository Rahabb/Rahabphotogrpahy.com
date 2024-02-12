// Shopping cart functionality
const cart = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Function to add an item to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

// Function to display the cart
function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product");
        const price = parseFloat(button.getAttribute("data-price"));
        addToCart(product, price);
    });
});

// Checkout button
const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart.");
    } else {
        alert("This is a mock checkout. In a real e-commerce site, you'd be redirected to a payment gateway for secure payment processing.");
    }
});
