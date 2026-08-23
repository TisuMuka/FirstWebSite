async function loadComponent(id, file) {
    const response = await fetch(file);
    const content = await response.text();

    document.getElementById(id).innerHTML = content;
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");