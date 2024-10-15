document.addEventListener('DOMContentLoaded', (event) => {
    // Function to get cart quantity from localStorage
    function getCartQuantity() {
        const quantity = localStorage.getItem('cartQuantity');
        return quantity ? parseInt(quantity, 10) : 0;
    }

    // Function to set cart quantity in localStorage
    function setCartQuantity(quantity) {
        localStorage.setItem('cartQuantity', quantity);
    }

    // Function to update the cart quantity indicator
    function updateCartQuantity() {
        const cartQuantityElement = document.getElementById('cart-quantity');
        if (cartQuantityElement) {
            cartQuantityElement.textContent = getCartQuantity();
        }
    }

    // Function to add product to cart
    function addToCart() {
        let cartQuantity = getCartQuantity();
        cartQuantity += 1; // Increment cart quantity
        setCartQuantity(cartQuantity); // Save to localStorage
        updateCartQuantity(); // Update display
    }

    // Function to remove all products from cart
    function removeAllFromCart() {
        setCartQuantity(0); // Set cart quantity to 0 in localStorage
        updateCartQuantity(); // Update display
    }

    // Initialize cart quantity on page load
    updateCartQuantity();

    // Add event listeners to "Add To Cart" and "Remove From Cart" buttons
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const removeFromCartBtn = document.getElementById('remove-from-cart-btn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    if (removeFromCartBtn) {
        removeFromCartBtn.addEventListener('click', removeAllFromCart);
    }
});
