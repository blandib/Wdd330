import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

import {ExternalServices} from "./ExternalServices.mjs";
import { ProductListing } from "./ProductList.mjs";
// main.js
import { loadHeaderFooter } from './utils.mjs';

window.addEventListener('DOMContentLoaded', (event) => {
  loadHeaderFooter();
});

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();
