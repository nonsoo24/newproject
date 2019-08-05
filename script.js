$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content1').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

// Get the header
var header = document.getElementById("banner-message");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// TAC code validation
let button = document.getElementById('btn-continue');
const tacCodeValidation = () => {
    let tacErrorMessage = document.getElementById('tac-error');
    let tacCode = [2060, 5666, 3456, 5367];
    let password = document.getElementById('input-password').value;
    if (tacCode.indexOf(parseInt(password)) >= 0) {
        swal({
            title: 'Success',
            text: 'Authorization Successful',
            icon: 'success',
            type: 'success',
            // confirmButtonText: 'Okay'
        }).then(function () {
            window.location.href = "loginsuccessful.html"
        });

    } else {
        tacErrorMessage.innerHTML = "TAC code incorrect"
        tacErrorMessage.style.color = "red";
    }
}

button.addEventListener('click', tacCodeValidation);