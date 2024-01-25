import ProductData from "./ProductData.mjs";
import { setLocalStorage, getParam } from "./utils.mjs";
const dataSource = new ProductData("tents");

const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();