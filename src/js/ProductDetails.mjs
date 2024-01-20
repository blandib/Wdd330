import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage, getParam } from "./utils.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");


const product = new ProductDetails(productId, dataSource);
product.init();


class ProductDetails {
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

    // Add other methods as needed
    addToCart() {
        let cartContents = getLocalStorage("so-cart");
        if (!cartContents) {
          cartContents = [];
        }
        cartContents.push(this.product);
    setLocalStorage("so-cart", cartContents);
}
}
export default new ProductDetails();