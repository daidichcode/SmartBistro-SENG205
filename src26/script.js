let cart = null;

function addToCart() {
  cart = {
    item: "Classic Beef Burger",
    price: 12.00
  };

  document.getElementById("cart-item").innerText = cart.item + " x1";
  document.getElementById("cart-item").classList.remove("empty");
  document.getElementById("total").innerText = "Total: $" + cart.price.toFixed(2);
}

function checkout() {
  const email = document.getElementById("email").value;

  if (cart === null) {
    alert("Please add an item to the cart first.");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter a customer email.");
    return;
  }

  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("hidden");

  confirmation.innerHTML = `
    <strong>Payment Successful!</strong><br>
    Order #101 has been confirmed.<br>
    Item: ${cart.item}<br>
    Total Paid: $${cart.price.toFixed(2)}<br>
    Confirmation email sent to: ${email}
  `;
}