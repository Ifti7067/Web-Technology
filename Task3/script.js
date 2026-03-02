let wrongCount = 0;
console.log("Connected");
function collectFormData(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailErr = document.getElementById("emailErr");
    const passwordErr = document.getElementById("passwordErr");
    const failCount = document.getElementById("failCount");

    
    let hasError = false;

    if (!email.includes("@")) {
        emailErr.innerHTML = "Email must contain @";
        hasError = true;
    }
    else if (!email) {
        emailErr.innerHTML = "Email must be filled";
        hasError = true;
    }
    if (password.length < 6) {
        passwordErr.innerHTML = "Password must be at least 6 characters";
        hasError = true;
    } else if (!password.includes("#")) {
        passwordErr.innerHTML = "Password must contain #";
        hasError = true;
    }

    if (hasError) {
        wrongCount++;
        failCount.innerHTML = wrongCount;
        return false;
    }

    alert("Login Successful");
    return true;
}