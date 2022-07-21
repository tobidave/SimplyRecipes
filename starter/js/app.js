const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errormsg = document.querySelectorAll(".error");

function validateForm() {

    // console.log("Done");

    clearMessage()

    if(firstNameInput.value.length < 1){
        errormsg[0].innerText =  "First Name cannot be empty";
        firstNameInput.classList.add("error-border");
    }

    if(lastNameInput.value.length < 1){
        errormsg[1].innerText =  "Last Name cannot be empty";
        lastNameInput.classList.add("error-border");
    }

    if(!emaiIsValid(email.value)){
        errormsg[2].innerText =  "Looks like this is not an email";
        emailInput.classList.add("error-border");
    }

    if(messageInput.value.length < 1){
        errormsg[3].innerText =  "Message can not be empty";
        messageInput.classList.add("error-border");
    }

}

function clearMessage(){
    for(let i = 0; i < errormsg.length; i++){
        errormsg[i].innerText = ""
    }
    firstNameInput.classList.remove("error-border");
    lastNameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");

}

function emaiIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email); 
}
const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element
    throw Error(
        `yes there is an error, no ${selector} class`
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
    links.classList.toggle('show-links')
    
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()

date.textContent = currentYear