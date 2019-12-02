// declaration of variables
const mainDiv = document.querySelector('#content2');
const spinner = document.querySelector('#spinner');
const password = document.querySelector('#input-password');
const tacErrorMessage = document.querySelector('#tac-error');
const button = document.querySelector('#btn-continue');
// console.log(password);

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});




// TAC code validation
const tacCodeValidation = () => {
   // debugger
    let tacCode = [2060, 5666, 3456, 5367]; // item array
    localStorage.setItem("item", JSON.stringify(tacCode));  // store item array to local storage
    var retrievedData = localStorage.getItem("item"); // retrieve item array from local storage
    var newItem = JSON.parse(retrievedData);
    let value = parseInt(password.value);           // cast array values to integers
    if (newItem.includes(value)){ // checks if input entered exists in the array
        newItem = newItem.filter(password => password != value); // returns the remaining values in the array
        localStorage.clear(); // clear local storage
        swal({
            title: 'Authorization Successful',
            text: '',
            icon: 'success',
            type: 'success',
        }).then
        (function (){
            setTimeout(function () {
                spinner.style.visibility = 'visible';
            }, 1000);
            setTimeout(function(){
                window.location.href = 'loginsuccessful.html';
            }, 3000)
        })

    }else {
        tacErrorMessage.innerHTML = "TAC code incorrect"
        tacErrorMessage.style.color = "red";
    }
}

button.addEventListener('click', tacCodeValidation);



