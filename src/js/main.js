import ProductData from "./ProductData.mjs";
import ProductListing from "./productList.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".porduct-list");
const ProductListing = new ProductListing("tents", dataSource, element);

ProductListing.init()