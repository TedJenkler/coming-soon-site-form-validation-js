let errorText = document.querySelector('.errortext')
let errorAlert = document.querySelector('.erroralert')
let errorInput = document.querySelector('.errorinput')
let email = document.querySelector('#email')
let form = document.querySelector('#form')

function validateEmail(email) {
    
    return res.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {

    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.value === "" || !email.value.match(res)){
    e.preventDefault()
    errorText.classList.remove("errortext")
    errorAlert.classList.remove("erroralert")
    errorInput.classList.remove("errorinput")
    }
    else {

    }
})
