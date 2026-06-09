document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("message").innerText =
        "Your order has been received! Please pay now to confirm your order.";
});