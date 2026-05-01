let cart = null;

function addToCart() {
  cart = {
    item: "Classic Beef Burger",
    price: 12.00
  };

  document.getElementById("cart-item").innerText = cart.item + " x1";
  document.getElementById("total").innerText = "Total: $" + cart.price.toFixed(2);
}

function checkout() {
  if (cart === null) {
    alert("Please add an item to the cart first.");
    return;
  }

  document.getElementById("confirmation").innerHTML =
    "Payment successful!<br>Order #101 confirmed.<br>Confirmation email sent to customer@email.com.";
}