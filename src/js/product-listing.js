import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter,getParam } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const category = getParam("category");
const listing = new ProductList(category, dataSource, element);


listing.init();