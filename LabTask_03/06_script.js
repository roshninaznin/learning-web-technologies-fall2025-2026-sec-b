function validateBlood() {
    // Get select element and error message
    let blood = document.getElementById("blood_group");
    let errorMsg = document.getElementById("bloodError");

    // Check if a value is selected
    if (blood.value === "") {
        errorMsg.innerHTML = "Please select a blood group!";
        return false; // Prevent form submission
    } else {
        errorMsg.innerHTML = ""; // Clear error
        return true; // Allow form submission
    }
}
