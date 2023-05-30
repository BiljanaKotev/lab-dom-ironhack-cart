// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let priceEl = document.querySelector(".price span");
  let quantityEl = document.querySelector(".quantity input");
  let subTotalEl = document.querySelector(".subtotal span");

  let price = Number(priceEl.textContent);
  let quantity = Number(quantityEl.value);

  let subTotal = price * quantity;
  subTotalEl.textContent = subTotal.toFixed(2);
}

updateSubtotal("pan");

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // // end of test

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML += `        <tr class="product">
          <td class="name">
            <span>Ironhack Rubber Duck</span>
          </td>
          <td class="price">$<span>25.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  // ITERATION 3
  //... your code goes here
}

calculateAll();

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
