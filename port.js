 // JavaScript code goes here
        let cvBtn = document.getElementById("cvBtn"); // Fixed variable name
        let submit = document.getElementById("submit"); // Added id="submit" to button in HTML
        cvBtn.addEventListener("click", function() {
            alert("Download Successfully");
        });

       // Adding event listener to the submit button
document.getElementById("submit").addEventListener("click", function() {
    // Retrieving input field values
    let email = document.getElementById("email").value;
    let pass = document.getElementById("Pass").value; // Corrected ID to "Pass"
    let msg = document.getElementById("Msg").value; // Added to retrieve message input field value

    // Checking if email or password field is empty
    if (email === "" || pass === "") {
        alert("Please fill in all fields.");
    } else {
        // You may want to send the data to a server here or perform other actions
        // For now, just displaying a message indicating successful submission
        alert("Form submitted successfully!");
        // Optionally, you can clear the form fields after successful submission
        document.getElementById("email").value = "";
        document.getElementById("Pass").value = "";
        document.getElementById("Msg").value = "";
    }
});

