import './style.css';

let email = document.querySelector("#email");
email.addEventListener("blur", ()=>{
    if (email.validity.typeMismatch) {
        email.nextElementSibling.innerHTML = "Insert a valid mail"
    } else {

    }
})


function formValidation (event) {
    event.preventDefault();


}