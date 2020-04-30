function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}






function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.value.match(passw)) {
        alert('Correct, try another')
        return true;
    } else {
        alert('Wrong Password,try another')
        return false;
    }
}