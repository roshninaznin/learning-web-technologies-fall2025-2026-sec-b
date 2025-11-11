function validateDOB() {
    const dobInput = document.getElementById("dobInput").value;
    const msg = document.getElementById("dobError");

    if(dobInput === "") {
        msg.innerHTML = "Date of Birth cannot be empty!";
        msg.style.color = "red";
        return false; 
    }

    const dob = new Date(dobInput);
    const day = dob.getDate();
    const month = dob.getMonth() + 1; 
    const year = dob.getFullYear();

    if(day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2016) {
        msg.innerHTML = "Invalid Date! Day: 1-31, Month: 1-12, Year: 1900-2016";
        msg.style.color = "red";
        return false;
    }

 
    msg.innerHTML = "Date of Birth is valid: " + dobInput;
    msg.style.color = "green";
    return true;
}
