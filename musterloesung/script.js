let cartItems = [];
let totalPrice = 0;

function renderCart() {
  const cartElement = document.getElementById("cart-items");
  cartElement.innerHTML = "";
  totalPrice = 0;

  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    const priceCell = document.createElement("td");
    priceCell.textContent = item.price;
    row.appendChild(priceCell);
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Entfernen";
    removeButton.addEventListener("click", () => removeItem(item));
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    cartElement.appendChild(row);

    totalPrice += item.price;
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function addToCart(name, price) {
  cartItems.push({ name: name, price: price });
  renderCart();
}

function removeItem(itemToRemove) {
  cartItems = cartItems.filter((item) => item !== itemToRemove);
  renderCart();
}
