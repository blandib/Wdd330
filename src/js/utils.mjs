// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
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