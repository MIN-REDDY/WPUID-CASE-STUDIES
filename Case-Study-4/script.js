
let totalAmount = 0;

document.getElementById("expenseForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    totalAmount = totalAmount + amount;

    document.getElementById("total").innerHTML = "₹" + totalAmount;

    let listItem = document.createElement("li");

    listItem.innerHTML = name + " - ₹" + amount + " (" + category + ")";

    document.getElementById("expenseList").appendChild(listItem);

    document.getElementById("expenseForm").reset();
});
