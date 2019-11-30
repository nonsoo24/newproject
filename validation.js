// get required form fields
let bankNameId = document.getElementById('bank-name');
console.log(bankNameId)
let bankAccountNumberId = document.getElementById('bank-account-number');
let bankAddressId = document.getElementById('bank-address');
let destinationAccountNameId = document.getElementById('dest-account-name');
let form = document.getElementById('form');
let submitButton = document.getElementById('submit-button');



// form validations

// Bank Name validation
const bankNameValidation = () => {
    let bankName = bankNameId.value
    //debugger
    if (bankName.length === 0) {
        errorMessagePrompt("This field is required", "bankNameError", "red");
        return false;

    } else errorMessagePrompt("", "bankNameError", "");
    return true;
}

//Bank Address validation
const bankAddressValidation = () => {
    let bankAddress = bankAddressId.value
    if (bankAddress.length === 0) {
        errorMessagePrompt("This field is required", "bankAddressError", "red");
        return false;

    } else errorMessagePrompt("", "bankAddressError", "");
    return true;
}

//Destination Account Number validation
const bankAccountNumberValidation = () => {
    let bankAccountNumber = bankAccountNumberId.value;
    if (bankAccountNumber.length === 0) {
        errorMessagePrompt("This field is required", "destinationNumberError", "red");
        return false;

    } else errorMessagePrompt("", "destinationNumberError", "");
    return true;
}
//Destination Account Name validation
const destinationAccountNameValidation = () => {
    let destinationAccountName = destinationAccountNameId.value;
    if (destinationAccountName.length === 0) {
        errorMessagePrompt("This is required", "destinationNameError", "red");
        return false;

    } else errorMessagePrompt("", "destinationNameError", "");
    return true;
}


// Error message function
const errorMessagePrompt = (message, errorMessage, color) => {
    document.getElementById(errorMessage).textContent = message;
    document.getElementById(errorMessage).style.color = color;
    // document.getElementsByClassName("input").style.border = border;

}


submitButton = (e) => {

    //debugger
    bankNameValidation()
    bankAddressValidation()
    bankAccountNumberValidation()
    destinationAccountNameValidation()
    window.location.href = 'Transfer-authNew.html';
    e.preventDefault();

    return true;
};


bankNameId.addEventListener('blur', bankNameValidation);
bankAddressId.addEventListener('blur', bankAddressValidation);
bankAccountNumberId.addEventListener('blur', bankAccountNumberValidation);
destinationAccountNameId.addEventListener('blur', destinationAccountNameValidation);
form.addEventListener('submit', submitButton);
