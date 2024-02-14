import ProductDetails from "./ProductDetails.mjs";
import ProductData from "./ProductData.mjs";
import { setLocalStorage, getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData();
console.log("datasource", dataSource);
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
