import ExternalServices from "./ExternalServices.mjs";
import ProductListing from "./product-listing";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam('category');
// first create an instance of our ExternalServices class.
const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductListing(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();