const myElement = document.getElementsByClassName("dropdown-menu");

myElement.onchange = "changeNav()";

function changeNav() {
    const element = document.getElementsByClassName('dropdown-menu');

    if (element.getAttribute('aria-expanded') === 'true') {
        element.style.width = '90vw';
        element.style.display = 'grid';
        element.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    }
}
