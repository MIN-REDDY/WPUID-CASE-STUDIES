
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let selectedEvent = document.getElementById("event").value;

    document.getElementById("message").innerHTML =
        "Registration Successful! " + name +
        " has registered for " + selectedEvent + ".";

    document.getElementById("registrationForm").reset();
});
