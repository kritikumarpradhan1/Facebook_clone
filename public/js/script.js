document.addEventListener("DOMContentLoaded", function () { document.getElementById("loginForm").addEventListener("submit", function (event) { event.preventDefault(); // Prevent form submission

// Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Dummy authentication (replace with real authentication)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid username or password");
    }
});

});
function login() {
    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Dummy authentication (replace with real authentication)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        window.location.href = "../home.html"; // Redirect to home page
    } else {
        alert("Invalid username or password");
    }
}