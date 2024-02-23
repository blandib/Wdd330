import { setLocalStorage, getLocalStorage } from "./utils.mjs";
  
  function cartItemTemplate(item) {
    return `<li class="cart-card divider">
    <button id="removeFromCart" data-id="${item.Id}">X</button>
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimarySmall}"
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
  }

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }

    async init() {
      this.renderCartContents();
      const remove = document.querySelectorAll("[id='removeFromCart']");
      const cart = this;
      remove.forEach(function(item) {
          item.addEventListener("click", function() {
              cart.removeItem(item.dataset.id);
            });
      });
    }
    renderCartContents() {
      const cartItems = getLocalStorage(this.key);
      console.log("loaded cart contents", cartItems);
      const totalPrice = document.querySelector(".cart-footer");
      if (cartItems.length === 0) {
        totalPrice.style.display = "none";
      } else {
        totalPrice.style.display = "block";
        this.displayTotal();
      }
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      // const htmlItems = cartItemTemplate(cartItems);
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
      // document.querySelector(".product-list").innerHTML = htmlItems;
    }

    removeItem(item) {
      console.log("console log for removing item");
      const cartItems = getLocalStorage(this.key);
      const filteredArr = cartItems.filter(i => i.Id !== item);
      setLocalStorage("so-cart", filteredArr);
      this.init();
    }
    displayTotal() {
      const cartItems = getLocalStorage(this.key);
      let totalPrice = 0;
      cartItems.forEach(function(item) {
        console.log(item.FinalPrice);
        totalPrice += item.FinalPrice;
      });
      document.querySelector(".cart-total").innerHTML = totalPrice;
    }

}