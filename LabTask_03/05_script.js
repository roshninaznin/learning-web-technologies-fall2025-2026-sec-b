function validateDegree() {
    // Get all checkboxes
    let checkboxes = document.getElementsByName("abc[]");
    let errorMsg = document.getElementById("degreeError");
    let isChecked = false;

    // Check if at least one checkbox is checked
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    // Show error if none checked
    if (!isChecked) {
        errorMsg.innerHTML = "Please select at least one degree!";
        errorMsg.style.color = "red";

        return false; // Prevent form submission
    } else {
        errorMsg.innerHTML = ""; // Clear error
        return true; // Allow form submission
    }
}
