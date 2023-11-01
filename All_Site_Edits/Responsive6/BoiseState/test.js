//

let ordersPage = document.getElementsByClassName("orderSummaryPage");

if (ordersPage.classList.contains("orderSummaryPage")) {
  function addParagraph() {
    let paragraph = document.createElement("p");

    paragraph.textContent =
      "Please note that the merchant name will appear as Speedy CPS on billing statements.";

    let container = document.getElementsByClassName("ordersPage");

    container.appendChild(paragraph);
  }
  addParagraph();

  console.log("Maybe?");
} else {
  console.log("Nope");
}

// function addParagraph() {
//   let paragraph = document.createElement("p");

//   paragraph.textContent =
//     "Please note that the merchant name will appear as Speedy CPS on billing statements.";

//   let container = document.getElementsByClassName("ordersPage");

//   container.appendChild(paragraph);
// }

// addParagraph();

// let container = document.getElementsByClassName("ordersPage");

// console.log(container);
