// ProductList.mjs
function productCardTemplate(product) { 
    return `<li class="product-card">
      <a href="../product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Images.PrimaryMedium}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">$${product.Price}</p></a>
    </li>`
   
}




class ProductListing {
    constructor() {
        this.products = {};
    }
    addProduct(category, product) {
        if (!this.products[category]){
            this.products[category] = [];
        }
        this.products[category].push(product);
    }
    getProductsByCategory(category){
        return this.products[category]  || [];

        
    }
  }

  const renderList = (element, list) => {
    // Create a container element
    const listElement = document.createElement('ul');

    // Loop through the list items
    list.forEach(item => {
        // Render each item into an HTML Element
        const itemElement = document.createElement('li');
        itemElement.innerHTML = item;

        // Attach the HTML Element into the container Element
        listElement.appendChild(itemElement);
    });

    // Attach container element to the DOM
    element.appendChild(listElement);
}

// Usage
const productList = ["Products.Brand.Name", "Product.Name", "Product.Price"];
renderList(document.body, productList);

export default class ProductList {
    constructor(category, dataSource, listElement) {
  
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
  
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData(this.category);
      // render the list
      this.renderList(list);
      //set the title to the current category
      document.querySelector(".title").innerHTML = this.category;
    }
  
    /*renderList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
      
    }*/
    renderList(list) {
        const htmlStrings = list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
      }
  }