// Generate a random code
function generateCode() {
    var code = ''; // Initialize an empty string for the code
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz0123456789'; // Possible characters

    // Loop to generate an 8-character code
    for (var i = 0; i < 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Get a random index
        code += str.charAt(char); // Append the character at the random index to the code
    }
    return code; // Return the generated code
}

// Display the generated code and store it in a variable
var generatedCode = generateCode(); // Generate and store the code in a variable
document.getElementById("codes").innerHTML = generatedCode; // Display the code in the element with ID 'codes'

// Function to enable or disable the submit button
function disableButton(btnvalue) {
    var submitButton = document.getElementById("submit"); // Get the submit button element
    submitButton.disabled = btnvalue; // Enable or disable the button based on btnvalue
    if (btnvalue) { // If the button is disabled
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)"; // Change background to light color
        submitButton.style.color = "rgba(255, 255, 255, 0.5)"; // Change text color to light
    } else { // If the button is enabled
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)"; // Change background to vivid color
        submitButton.style.color = "rgba(255, 255, 255, 1)"; // Change text color to white
    }
}

// Initialize by disabling the submit button
disableButton(true); // Disable the submit button when the page loads

// Evaluate the entered code
function evaluateCode() {
    var getCode = document.getElementById("codeentered").value.trim(); // Get and trim the entered code
    if (getCode.length === generatedCode.length && getCode === generatedCode) { // Check if codes match
        disableButton(false); // Enable the submit button if codes match
    } else {
        disableButton(true); // Ensure the button stays disabled if the code doesn't match
    }
}

// Add an event listener to the input box for evaluating the code
document.getElementById('codeentered').addEventListener("input", evaluateCode); // Call evaluateCode on input
