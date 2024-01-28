import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

import {productData} from "./ProductData.mjs";
import { ProductListing } from "./ProductList.mjs";
// main.js
import { loadHeaderFooter } from './utils.mjs';

window.addEventListener('DOMContentLoaded', (event) => {
  loadHeaderFooter();
});

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();
