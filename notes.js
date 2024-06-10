
var h2 = document.createElement("h2");
h2.textContent = "Featured Products";
var colDiv = document.querySelector("#main-content div.categoryPage_root div div.col-xs-12");
if (colDiv) {
    colDiv.appendChild(h2);
}


var h2 = document.createElement("h2");

h2.textContent = "Featured Products";

var colDiv = document.querySelector("#main-content div.categoryPage_root div div.col-xs-12");

if (colDiv) {
    colDiv.insertBefore(h2, colDiv.firstChild);
}