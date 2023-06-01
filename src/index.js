// ITERATION 1

function updateSubtotal(productRowArray) {
  console.log("Calculating subtotal, yey!");

  for (let i = 0; i < productRowArray.length; i++) {
    const product = productRowArray[i];

    const priceEl = product.querySelector(".price span");
    const quantityEl = product.querySelector(".quantity input");
    const subTotalEl = product.querySelector(".subtotal span");

    const price = Number(priceEl.textContent);
    const quantity = Number(quantityEl.value);

    const subTotal = price * quantity;
    subTotalEl.textContent = subTotal.toFixed(2);
  }
}

function calculateAll() {
  const calculatePricebtn = document.getElementById("calculate");
  const totalValue = document.querySelector("#total-value span");
  const subTotal = document.querySelectorAll(".subtotal span");
  const subTotalArray = [...subTotal];
  const productRow = document.getElementsByClassName("product");
  const productRowArray = [...productRow];

  function calculateSubTotal() {
    let sum = 0;
    subTotalArray.forEach(function (subtotalEl) {
      sum += Number(subtotalEl.textContent);
    });
    return sum;
  }

  calculatePricebtn.addEventListener("click", () => {
    totalValue.innerHTML = calculateSubTotal();
  });
  updateSubtotal(productRowArray);
}

// ITERATION 4

function removeProduct(event) {
  const removeBtn = document.querySelectorAll(".btn-remove");

  removeBtn.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const productRow = e.target.closest(".product");
      productRow.style.display = "none";
    });
  });
}

removeProduct();

// ITERATION 5

function createProduct() {
  // // end of test
  // let product = document.getElementsByClassName("product");
  // let productArray = [...product];
  // const tableBody = document.querySelector("tbody");
  // const productName = document.getElementsByClassName("name");
  // const productPrice = document.getElementsByClassName("price");
  // tableBody.innerHTML += `<tr class="product">
  //         <td class="name">
  //           <span>Ironhack Rubber Duck</span>
  //         </td>
  //         <td class="price">$<span>25.00</span></td>
  //         <td class="quantity">
  //           <input type="number" value="0" min="0" placeholder="Quantity" />
  //         </td>
  //         <td class="subtotal">$<span>0</span></td>
  //         <td class="action">
  //           <button class="btn btn-remove">Remove</button>
  //         </td>
  //       </tr>`;
  // productName[1].innerHTML = "IronHack Beach Towel";
  // productPrice[1].innerHTML = "$12.50";
  // const totalTab = document.querySelector("#total-value span");
  // const product = document.getElementsByClassName("product");
  // const calculateBtn = docu;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
