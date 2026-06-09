const payBtn = document.getElementById("payBtn");

payBtn.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const packageValue = document.getElementById("package").value;
    const status = document.getElementById("status");

    if (email === "") {
        status.innerText = " Please enter your email";
        return;
    }

    status.innerText =
        "Order received! We will contact you at " + email;
});