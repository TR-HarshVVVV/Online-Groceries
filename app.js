// JavaScript for handling "Add to Cart" functionality

// Initialize cart as an empty array
let cart = [];

// Select all add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Select cart DOM elements
const cartItemsList = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

// Add event listener to all buttons
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));

    // Add product to cart array
    addToCart(productName, productPrice);

    // Update the cart display
    updateCart();
  });
});

// Function to add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
}

// Function to update the cart display
function updateCart() {
  // Clear previous cart items
  cartItemsList.innerHTML = "";

  let total = 0;

  // Loop through cart and display items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);

    // Calculate total
    total += item.price;
  });

  // Update the total price
  cartTotalElement.textContent = total.toFixed(2);
}
