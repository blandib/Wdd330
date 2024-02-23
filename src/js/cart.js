import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const shopping_cart = new ShoppingCart("so-cart", ".product-list");
shopping_cart.init();