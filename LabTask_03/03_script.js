function validateGender() {
    const radios = document.getElementsByName("gender");
    const msg = document.getElementById("genderError");
    let selected = false;

    // Check if any radio button is selected
    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selected = true;
            break;
        }
    }

    if(!selected) {
        msg.innerHTML = "Please select a gender!";
        msg.style.color = "red";
        return false; 
    } else {
        
        return true; 
    }
}
