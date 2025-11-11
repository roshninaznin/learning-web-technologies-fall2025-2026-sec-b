function validateAll() {
    let valid = true;

    if (!validateName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateGender()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateBlood()) valid = false;
    if (!validateDegree()) valid = false;
    if (!validatePhoto()) valid = false;

    return valid;
}

// Name Validation
function validateName() {
    const name = document.getElementById("name").value.trim();
    const msg = document.getElementById("nameError");

    if (name === "") {
        msg.textContent = "Name cannot be empty!";
        return false;
    }

    const words = name.split(" ").filter(w => w.length > 0);
    if (words.length < 2) {
        msg.textContent = "Name must contain at least two words.";
        return false;
    }

    const pattern = /^[A-Za-z][A-Za-z.\- ]*$/;
    if (!pattern.test(name)) {
        msg.textContent = "Name must start with a letter and can contain letters, dot(.), dash(-).";
        return false;
    }

    msg.textContent = "";
    return true;
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("emailError");

    if (email === "") {
        msg.textContent = "Email cannot be empty!";
        return false;
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
        msg.textContent = "Enter a valid email (example@example.com)";
        return false;
    }

    msg.textContent = "";
    return true;
}

// Gender Validation
function validateGender() {
    const genders = document.getElementsByName("gender");
    const msg = document.getElementById("genderError");

    for (let g of genders) {
        if (g.checked) {
            msg.textContent = "";
            return true;
        }
    }

    msg.textContent = "Please select a gender!";
    return false;
}

// DOB Validation
function validateDOB() {
    const dob = document.getElementById("dobInput").value;
    const msg = document.getElementById("dobError");

    if (dob === "") {
        msg.textContent = "Date of Birth cannot be empty!";
        return false;
    }

    const date = new Date(dob);
    const year = date.getFullYear();
    if (year < 1900 || year > 2016) {
        msg.textContent = "Year must be between 1900 and 2016!";
        return false;
    }

    msg.textContent = "";
    return true;
}

// Blood Validation
function validateBlood() {
    const blood = document.getElementById("blood_group").value;
    const msg = document.getElementById("bloodError");

    if (blood === "") {
        msg.textContent = "Please select a blood group!";
        return false;
    }

    msg.textContent = "";
    return true;
}

// Degree Validation
function validateDegree() {
    const checks = document.getElementsByName("abc[]");
    const msg = document.getElementById("degreeError");
    let checked = false;

    for (let c of checks) {
        if (c.checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        msg.textContent = "Please select at least one degree!";
        return false;
    }

    msg.textContent = "";
    return true;
}

// Photo Validation
function validatePhoto() {
    const pic = document.getElementById("profile_pic").value.trim();
    const msg = document.getElementById("picError");

    if (pic === "") {
        msg.textContent = "Please select a profile picture!";
        return false;
    }

    msg.textContent = "";
    return true;
}
