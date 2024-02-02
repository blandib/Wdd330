import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  
  const total = getTotal(cartItems);
  document.querySelector("#cart-total").innerHTML = `Total: $${total}`;

  const cartTotalElement = document.querySelector("#cart-total");
  if (total > 0) {
    cartTotalElement.innerHTML = `Total: $${total}`;
  } else {
    cartTotalElement.style.display = "none";
  }
}

const cart = new ShoppingCart("so-cart", ".product-list");

function cartItemTemplate(item) {
    return newItem;
  }

renderCartContents();

function getTotal(cartItems) {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.FinalPrice;
  });

  return total.toFixed(2); // Fix to 2 decimal places
}
