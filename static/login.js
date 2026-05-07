document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    
    if (!username) {
        displayError("Username cannot be empty.");
        return;
    }

    if (password.length < 10) {
        displayError("Password must be at least 10 characters long.");
        return;
    }

    if (username === "amrita" && password === "homeworkuid") {
        alert("goood");
       
    } else {
        displayError("Invalid username or password.");
    }
});

function displayError(message) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = message;
    errorElement.style.color = "#F08080";
    errorElement.style.fontFamily = "'Russo One', sans-serif";
}

