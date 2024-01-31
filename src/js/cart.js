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

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

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
