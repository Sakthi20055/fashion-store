// Select the form
const form = document.querySelector(".container");

// Function to show alert at top
function showTopAlert(message) {
    // Create alert div
    const alertDiv = document.createElement("div");
    alertDiv.textContent = message;
    
    // Style the alert
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "0";
    alertDiv.style.left = "0";
    alertDiv.style.width = "100%";
    alertDiv.style.backgroundColor = "green";
    alertDiv.style.color = "white";
    alertDiv.style.textAlign = "center";
    alertDiv.style.padding = "15px 0";
    alertDiv.style.fontWeight = "bold";
    alertDiv.style.zIndex = "1000";

    // Add to body
    document.body.appendChild(alertDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Listen for form submission
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent reload

    // Show top alert
    showTopAlert("Submitted successfully!");

    // Clear form fields
    form.reset();
});
