console.log("JavaScript Connected");

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailErr = document.getElementById("emailErr");
    const passwordErr = document.getElementById("passwordErr");

    emailErr.innerText = "";
    passwordErr.innerText = "";

    if (email === "") {
        emailErr.innerText = "Email is required";
        return;
    }

    if (!email.includes("@")) {
        emailErr.innerText = "Invalid email format";
        return;
    }

    if (password === "") {
        passwordErr.innerText = "Password is required";
        return;
    }

    if (password.length < 6) {
        passwordErr.innerText = "Password must be at least 6 characters";
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful!");
});