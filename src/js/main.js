
import {productData} from "./ProductData.mjs";
import { ProductListing } from "./ProductList.mjs";
// main.js
import { loadHeaderFooter } from './utils.mjs';

window.addEventListener('DOMContentLoaded', (event) => {
  loadHeaderFooter();
});


const productData = new productData();
class ProductListing {
    constructor(products) {
        this.products = products;
    }

    displayProducts() {
        this.products.forEach(product => {
            console.log(product);
        });
    }
}

// Create an array of products
let products = ["Products.Brand.Name", "Products.Name", "Product.Price"];

// Create an instance of ProductListing
let productListing = new ProductListing(products);

// Display the list of products
productListing.displayProducts();