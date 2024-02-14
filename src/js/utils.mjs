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

// helper to get parameter strings
export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  // console.log("list in render list with templlate", list);
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
) {
  template.then((html) => {
    parentElement.insertAdjacentHTML("afterbegin", html);
  }
  )

  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const html = await fetch(path)
  .then((data) => data.text());
  return html;
}

// function to load header and footer
export function loadHeaderFooter() {
  const header = document.getElementById("main_header");
  const footer = document.getElementById("main_footer");

  const headerTemplate = loadTemplate("../partials/header.html");
  const footerTemplate = loadTemplate("../partials/footer.html");

  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}