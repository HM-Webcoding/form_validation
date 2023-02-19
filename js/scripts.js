// button 
let button = document.querySelector(".btn")

// input filed
let inputControl = document.querySelector(".input__control")
let username = document.querySelector(".username")
let gender = document.querySelector(".gender")
let birth = document.querySelector(".birth")
let blood = document.querySelector(".blood")
let weaight = document.querySelector(".weaight")
let mobile = document.querySelector(".mobile")
let email = document.querySelector(".email")

// error message
let errorMessage = document.querySelector(".error_message")
let errorIcon = document.querySelector(".error_icon")

// success
let successIcon = document.querySelector(".success_icon")

// add event 
button.addEventListener("click", (event)=>{
    event.preventDefault()
    formValidation()
})

// defined validate function
const formValidation = () => {
    // error message function
    let getErrorMessage = (element, message) =>{
        element.style.border = "1px solid #D11414"
        element.parentElement.classList.add("error") 
        let showError = element.parentElement.lastElementChild
        showError.innerText = message
        // remove class with condition
        if(element.parentElement.className == "input__control error success"){
            element.parentElement.className = "input__control error" 
        }else if(element.parentElement.className == "input__control success error"){
            element.parentElement.className = "input__control error"
        }
    }

    // success message function
    let getSuccessMessage = (element) => {
        element.style.border = "1px solid #49AF41"
        element.parentElement.classList.add("success")
        let showError = element.parentElement.lastElementChild
        showError.innerText = ""
         // remove class with condition
        if(element.parentElement.className == "input__control error success"){
            element.parentElement.className = "input__control success" 
        }else if(element.parentElement.className == "input__control success error"){
            element.parentElement.className = "input__control success"
        }
    }
    // username validation
    if(username.value === ''){
        getErrorMessage(username, "Enter your full name")
    }else{
        getSuccessMessage(username)
    }

    // gender validation
    if(gender.value === "Select"){
        getErrorMessage(gender, "Select your gender")
    }else{
        getSuccessMessage(gender)
    }
    // date of birth validation
    
    let todayDate = new Date().getFullYear()
    let userBirthDay = new Date(birth.value).getFullYear()

    if(birth.value === ''){
        getErrorMessage(birth, "Select your birth date")
    }else if(todayDate - userBirthDay < 18){
        getErrorMessage(birth, "your age must have to gater than 18")
        console.log(todayDate);
        console.log(userBirthDay);
    }else{
        getSuccessMessage(birth)
        console.log(todayDate - userBirthDay)
    }
    // blood gropu validation
    if(blood.value === "Select"){
       getErrorMessage(blood, "Select your blood group")
    }else{
       getSuccessMessage(blood)
    }
    // weight validation
    if(weaight.value < 50){
        getErrorMessage(weaight, "Your weaith must to upper than 50")
    }else{
        getSuccessMessage(weaight)
    }
    // mobile number validation
    if(mobile.value.length > 11 || mobile.value.length < 11){
        getErrorMessage(mobile, "Enter your 11 digit mobile number")
    }else{
        getSuccessMessage(mobile)
    } 
    // mobile number validation
    if(email.value === ''){
        getErrorMessage(email, "Enter your valid email id")
    }else{
        getSuccessMessage(email)
    }
}

