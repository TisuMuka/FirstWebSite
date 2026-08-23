/**
 * Load HTML components into the page.
 * @param {string} id - The ID of the element to load the component into. e.g. <div id="header"></div> in index.html
 * @param {string} file - The path to the HTML file to load.
 */
async function loadComponent(id, file) {
    const response = await fetch(file); // fetch the HTML file
    const content = await response.text(); // Convert the response to text

    document.getElementById(id).innerHTML = content; // Put the content into the index.html
}

loadComponent("header", "components/header.html"); // this fullfil the <div id="header"></div> in index.html
loadComponent("footer", "components/footer.html"); // this fullfil the <div id="footer"></div> in index.html