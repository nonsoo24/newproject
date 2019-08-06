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


const authPasswordError = document.querySelector('#auth-password-error');
const authPasswordInput = document.querySelector('#auth-password');
const nextButton = document.querySelector('#next-button');


// transfer auth password validation
const authPasswordValidation = () => {
    let authPassword = [3456, 7889, 4568, 2345];
    let authPasswordInput = document.querySelector('#auth-password');
    if (authPassword.indexOf(parseInt(authPasswordInput.value)) >= 0) {
        swal({
            title: 'Transaction Successful',
            text: '',
            icon: 'success',
            type: 'success',
        }).then(function () {
            window.location.href = "loginsuccessful.html"
        });

    } else {
        authPasswordError.innerHTML = "Password is incorrect"
        authPasswordError.style.color = "red";
    }
}

nextButton.addEventListener('click', authPasswordValidation);
// $(function () {
//     $("#datepicker").datepicker({
//         autoclose: true,
//         todayHighlight: true
//     }).datepicker('update', new Date());
// });

