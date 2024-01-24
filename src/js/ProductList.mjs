import { renderListWithTemplate } from "./utils.mjs";

// const path = require("node:path");

// The purpose of this script will be to generate a list of product cards in HTML from an array
export function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}">
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.ListPrice}</p>
      </a>
    </li>`
  }

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        // render the product list
    }
    async init() {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData();
        this.renderList(list);
        // render the list - to be completed
    }
    renderList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
    }