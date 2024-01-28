// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

//load the templates
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}

//Load,Grab and Render the header and footer
export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter(path) {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}
/*const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product')*/

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

//import { loadTemplate } from './utils.mjs';

/*export async function loadHeaderFooter() {
    // Load the header and footer templates
    const headerTemplate = await loadTemplate("header");
    const footerTemplate = await loadTemplate("footer");

    // Grab the header and footer elements out of the DOM
    const headerElement = document.querySelector(headerTemplate);
    const footerElement = document.querySelector(footerTemplate);

    // Return the header and footer elements
    return { headerElement, footerElement };
}*/

export   async function loadHeaderFooter() {
      try {
          // Load the header and footer templates
          const headerTemplate = await loadTemplate('header');
          const footerTemplate = await loadTemplate('footer');

          // Grab the header and footer elements from the DOM
          const headerElement = document.querySelector('#header');
          const footerElement = document.querySelector('#footer');

          // Render the header and footer
          headerElement.innerHTML = headerTemplate;
          footerElement.innerHTML = footerTemplate;
  } catch (error) {
      console.error(`Error loading header and footer: ${error}`);
  }
}

loadHeaderFooter();

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
       // Load the header and footer templates
       const headerTemplate = await loadTemplate('header');
       const footerTemplate = await loadTemplate('footer');

      // Grab the header and footer elements out of the DOM
      const headerElement = document.querySelector('#header');
      const footerElement = document.querySelector('#footer');

      // Render the header and footer
     renderWithTemplate(headerElement, headerTemplate);
     renderWithTemplate(footerElement, footerTemplate);
}
