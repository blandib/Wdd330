import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter,getParam } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const category = getParam("category");
const listing = new ProductList(category, dataSource, element);


listing.init();