let cartItems = [];
let totalPrice = 0;

function addToCart(name, price) {
  // Überprüfen, ob das Produkt bereits im Warenkorb vorhanden ist
  const existingItemIndex = cartItems.findIndex((item) => item.name === name);

  if (existingItemIndex !== -1) {
    // Das Produkt ist bereits im Warenkorb, erhöhe die Anzahl
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Das Produkt ist neu im Warenkorb, füge es hinzu
    cartItems.push({ name: name, price: price, quantity: 1 });
  }

  renderCart();
}

function renderCart() {
  const cartElement = document.getElementById("cart-items");
  cartElement.innerHTML = "";
  totalPrice = 0;

  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.quantity + "x " + item.name; // Anzeigen der Anzahl
    row.appendChild(nameCell);
    const priceCell = document.createElement("td");
    priceCell.textContent = item.price * item.quantity; // Multipliziere den Preis mit der Anzahl
    row.appendChild(priceCell);
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Entfernen";
    removeButton.addEventListener("click", () => removeItem(item));
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    cartElement.appendChild(row);

    totalPrice += item.price * item.quantity; // Multipliziere den Preis mit der Anzahl
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function removeItem(itemToRemove) {
  cartItems = cartItems.filter((item) => item !== itemToRemove);
  renderCart();
}
