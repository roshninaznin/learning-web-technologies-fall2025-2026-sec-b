function validateForm() {
    let userId = document.getElementById("user_id").value.trim();
    let profilePic = document.getElementById("profile_pic").value.trim();
    let userError = document.getElementById("userError");
    let picError = document.getElementById("picError");
    let isValid = true;

    // Reset error messages
    userError.textContent = "";
    picError.textContent = "";

    // Validate User ID
    if (userId === "") {
        userError.textContent = "User ID cannot be empty!";
        isValid = false;
    } else if (isNaN(userId) || Number(userId) <= 0) {
        userError.textContent = "User ID must be a positive number!";
        isValid = false;
    }

    // Validate Picture
    if (profilePic === "") {
        picError.textContent = "Please select a profile picture!";
        isValid = false;
    }

    return isValid; // false will stop form submission
}
