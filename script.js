document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Form and Feedback Div Selection
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Step 2: Form Submission Event Listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Step 3: Retrieve and Trim Input Values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Step 4: Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Step 5: Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 6: Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        // Step 7: Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 8: Display Feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    });
});
