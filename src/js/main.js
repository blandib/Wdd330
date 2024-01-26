import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {loadHeaderFooter} from "./utils.mjs";


const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();

loadHeaderFooter("src/index.html");
loadHeaderFooter("product_pages/index.html");
loadHeaderFooter("cart/index.html");
loadHeaderFooter("cart/checkout.html");