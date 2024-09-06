const form = document.forms[0];
const username = form.name;
const email = form.email;
const message = form.message;


function isEmpty(field) {
    if (!field.value) {
        field.style.borderColor = "red";
        field.nextElementSibling.textContent = "this field is required!";
        return false;
    } else {
        field.style.borderColor = "#f3f3f3";
        field.nextElementSibling.textContent = "";
    }
    return true; 
}

function isValid(email) {
    if (email.value.indexOf("@") == -1) {
        email.style.borderColor = "red";
        email.nextElementSibling.textContent = "Please enter a valid email!";
        return false;
    } else {
        email.style.borderColor = "#f3f3f3";
        email.nextElementSibling.textContent = "";
    }
    return true;
}

form.addEventListener("submit", function(e) {
    if(!isEmpty(username)) e.preventDefault();
    else if(!isEmpty(email)) e.preventDefault();
    else if (!isValid(email)) e.preventDefault();
    else if(!isEmpty(message)) e.preventDefault();
});
