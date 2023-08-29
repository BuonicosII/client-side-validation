import './style.css';


//email input field functions
let email = document.querySelector("#email");

email.addEventListener("blur", ()=>{
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) && email.value.length > 0 ) {
        email.nextElementSibling.innerHTML = "Insert a valid mail!"
        email.classList.add("invalid");
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.classList.add("valid");
    }
});

email.addEventListener("focusin", ()=>{
    if (email.hasAttribute("class", "invalid")) {
        email.classList.remove("invalid");
        email.nextElementSibling.innerHTML = ""
    }
    if (email.hasAttribute("class", "valid")) {
        email.classList.remove("valid");
    }
})


function formValidation (event) {
    event.preventDefault();


}