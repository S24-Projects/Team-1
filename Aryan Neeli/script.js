function displayInput() {
    var input = document.getElementById("userInput").value; // Retrieves the value from the input field
    document.getElementById("displayArea").innerText = "You entered: " + input; // Sets the text of the display area to show what the user entered
}