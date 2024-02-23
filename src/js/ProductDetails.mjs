import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${product.Images.PrimaryLarge}"
        alt="${product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${product.FinalPrice}</p>
      <p class="product__color">${product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div></section>`;
  }


export default class ProductDetails {
    constructor(productId, dataSource) {
        // Initialization code here
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // Code for things that need to happen

        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
    }
    addToCart() {
      console.log("added to cart", this.product.Id);
      if (!getLocalStorage("so-cart")) {
        // console.log("local storage is empty");
        let cartContents = [this.product];
        setLocalStorage("so-cart", cartContents);
        // console.log("cart contents", getLocalStorage("so-cart"));
      } else {
        let newCartContents = getLocalStorage("so-cart");
        // console.log("local storage is not empty", newCartContents);
        newCartContents.push(this.product);
        // console.log("print local stirage after pushing new item", localStorage);
        setLocalStorage("so-cart", newCartContents);
      }
      // let cartContents = getLocalStorage("so-cart");
      //check to see if there was anything there
      // if (!cartContents) {
        // cartContents = [];
      // }
      // then add the current product to the list

      // cartContents.push(this.product);

      // setLocalStorage("so-cart", cartContents);
      // console.log("print localstorage", getLocalStorage("so-cart"));

        // setLocalStorage("so-cart", this.product);
    }
    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          productDetailsTemplate(this.product)
        );
    }
}