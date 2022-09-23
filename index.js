let errorText = document.querySelector('.errortext')
let errorAlert = document.querySelector('.erroralert')
let errorInput = document.querySelector('.errorinput')
let email = document.querySelector('#email')
let form = document.querySelector('#form')

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {

    if(email.value === ""){
    e.preventDefault()
    errorText.classList.toggle("errortext")
    errorAlert.classList.toggle("erroralert")
    errorInput.classList.toggle("errorinput")
    }
    else {

    }
})